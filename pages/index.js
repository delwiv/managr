/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import qs from 'querystring'
import Router from 'next/router'
import './list.css'
// import VisibilitySensor from 'react-visibility-sensor'

const API_URL = 'http://localhost:3038'

const isClient = typeof window !== 'undefined'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const fetchContacts = async (params = {}) => {
  if (!params.limit && params.limit !== 0) {
    params.limit = 500
  }
  const data = await fetch(`${API_URL}/contacts?${qs.stringify(params)}`, { cors: true })
  return data.json()
}

class Index extends React.Component {
  static async getInitialProps() {
    const data = await fetchContacts()
    return {
      contacts: data,
      loadingContacts: false,
    }
  }

  state = { contacts: [] }

  constructor(props) {
    super(props)
    this.state = { contacts: props.contacts }
  }

  componentDidMount() {
    if (isClient) {
      window.addEventListener('scroll', this.onScroll, false)
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('scroll', this.onScroll, false)
    }
  }

  onScroll = () => {
    if (this.lastCall && Date.now() < this.lastCall + 50) return
    console.log('on scroll')
    this.lastCall = Date.now()
    if (
      !this.state.loadingContacts &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5000 &&
      this.props.contacts.length
    ) {
      this.loadMore()
    }
  }

  sendEmails = async () => {
    const emails = Array.from(document.querySelectorAll('input[name="mass_mail"]:checked')).map(i => i.value.trim())
    console.log({ emails })
    const result = await fetch('http://localhost:3003/mails', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emails }),
    })
    console.log({ result })
  }

  loadMore = async () => {
    this.setState({ loadingContacts: true })
    const skip = this.state.contacts.length
    console.log({ skip })
    const contacts = await fetchContacts({ skip })
    this.setState({
      contacts: this.state.contacts.concat(contacts),
      loadingContacts: false,
    })
  }

  onClickContact = contactId => {
    console.log({ contactId })
    Router.push(`/contact?contactId=${contactId}`)
  }

  getRow = (contact, i) => (
    <tr key={contact._id} className="row">
      <td>{contact.departement}</td>
      <td>{contact.ville}</td>
      <td className="openContact" onClick={() => this.onClickContact(contact._id)}>
        {contact.nom}
      </td>
      <td>{contact.responsable}</td>
      <td>
        <a href={`mailto:${contact.mail}?SUBJECT=Jazz`}>{contact.mail}</a>
      </td>
      <td>{contact.envoi_mail}</td>
      <td>
        <input type="checkbox" value={contact.mail} name="mass_mail" style={{ padding: 0 }} />
      </td>
      <td>{contact.mois_contact}</td>
      <td>{contact.vu_le}</td>
    </tr>
  )

  render() {
    const {
      state: { contacts },
      getRow,
    } = this

    return (
      <div style={{ paddingTop: 0 }}>
        <table padding="dense" className="list">
          <thead>
            <tr>
              <th>Département</th>
              <th>Ville</th>
              <th>Nom</th>
              <th>Responsable</th>
              <th>Mail</th>
              <th>Mail Envoyé le</th>
              <th>Mail de masse</th>
              <th>Contact</th>
              <th>Vu le</th>
            </tr>
          </thead>
          <tbody>{contacts.map(getRow)}</tbody>
        </table>
      </div>
    )
  }
}

Index.propTypes = {
  contacts: PropTypes.Array,
}

export default Index
