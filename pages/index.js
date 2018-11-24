/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import ReactDOM from 'react-dom'
import T from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import './list.css'
import { connect } from 'react-redux'
import { Table, Input } from 'react-materialize'
import debounce from 'lodash.debounce'
import Navbar from '../src/components/navbar'

import { loadContacts, setCurrent } from '../lib/contacts'
import { months } from '../src/config'

const isClient = typeof window !== 'undefined'

class Index extends React.Component {
  static propTypes = {
    contacts: T.array.isRequired,
    current: T.number,
    query: T.string,
    loading: T.bool,
    lazyLoad: T.bool,
    count: T.number,
    loadContacts: T.func.isRequired,
    setCurrent: T.func.isRequired,
  }

  // state = { contacts: [] }

  constructor(props) {
    super(props)
    this.state = { contacts: props.contacts, checkedContacts: [] }
    this.loadContacts = params => this.props.loadContacts(params)
  }

  componentDidUpdate(prevProps) {
    if (this.props.contacts.length !== this.state.contacts.length) {
      this.setState({ contacts: this.props.contacts })
    }
    if (this.props.current && !prevProps.current) {
      const element = document.getElementById(`contact_${this.props.current}`)

      element.scrollIntoView({ block: 'center' })
    }
  }

  componentDidMount() {
    if (isClient) {
      try {
        window.M.AutoInit()
      } catch (err) {}
    }
    if (!this.props.contacts.length) {
      return this.loadContacts()
    }
  }

  // onScroll = () => {
  //   if (!this.props.lazyLoad) return
  //   if (this.lastCall && Date.now() < this.lastCall + 50) return
  //   this.lastCall = Date.now()
  //   if (
  //     !this.props.loading &&
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 5000 &&
  //     this.props.contacts.length
  //   ) {
  //     this.loadMore()
  //   }
  // }

  sendEmails = async () => {
    const emails = this.state.checkedContacts.map(i => i.value.trim())
    console.log({ emails })
    const result = await fetch('http://localhost:3003/mails', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emails }),
    })
    console.log({ result })
  }

  // loadMore = debounce(() => {
  //   const skip = this.props.contacts.length
  //   if (skip === this.props.count) {
  //     return
  //   }
  //   const q = this.props.query
  //   this.loadContacts({ skip, q })
  // }, 100)

  onClickContact = (contactId, i) => {
    this.props.setCurrent(i)
    Router.push(`/contact?contactId=${contactId}`)
  }

  selectAll = e => {
    const checked = e.target.checked
    const checkedContacts = []
    this.setState({
      contacts: this.state.contacts.map(c => {
        if (checked) checkedContacts.push({ _id: c._id, email: c.mail })
        return { ...c, checked }
      }),
      checkedContacts,
    })
  }

  selectContact = (contact, i) => e => {
    const checked = e.target.checked

    const contacts = [...this.state.contacts]
    const current = contacts[i]
    current.checked = checked

    let checkedContacts = [...this.state.checkedContacts]
    if (checked) checkedContacts.push({ _id: current._id, email: current.mail })
    else checkedContacts = checkedContacts.filter(c => c._id !== current._id)
    this.setState({ contacts, checkedContacts })
  }

  getRow = current => (contact, i) => (
    <tr id={`contact_${i}`} key={contact._id} className={current === i || contact.checked ? 'row highlight' : 'row'}>
      <td align="center" className="action-checkbox">
        <label>
          <input checked={contact.checked} type="checkbox" onChange={this.selectContact(contact, i)} />
          <span />
        </label>
      </td>
      <td>{contact.departement}</td>
      <td>{contact.ville}</td>
      <td className="openContact" onClick={() => this.onClickContact(contact._id, i)}>
        {contact.nom}
      </td>
      <td>{contact.responsable}</td>
      <td>
        <a href={`mailto:${contact.mail}?SUBJECT=Jazz`}>{contact.mail}</a>
      </td>
      <td>{contact.envoi_mail}</td>
      <td>{months[+contact.mois_contact]}</td>
      <td>{contact.vu_le}</td>
    </tr>
  )

  render() {
    const {
      props: { current },
      state: { contacts, checkedContacts },
      getRow,
      selectAll,
      sendEmails,
    } = this

    return [
      <Navbar key="navbar" selected={checkedContacts} sendEmails={sendEmails} />,
      <div key="list" style={{ paddingTop: 0 }}>
        <Table>
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" onChange={selectAll} />
                  <span>Sél. tous</span>
                </label>
              </th>
              <th>Département</th>
              <th>Ville</th>
              <th>Nom</th>
              <th>Responsable</th>
              <th>Mail</th>
              <th>Mail Envoyé le</th>
              <th>Contact</th>
              <th>Vu le</th>
            </tr>
          </thead>
          <tbody>{contacts.map(getRow(current))}</tbody>
        </Table>
      </div>,
    ]
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  loading: state.loadingContacts,
  current: state.currentId,
  lazyLoad: state.lazyLoad,
  query: state.query,
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  loadContacts: params => dispatch(loadContacts(params)),
  setCurrent: pos => dispatch(setCurrent(pos)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
