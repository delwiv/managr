import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import curry from 'curry'

import { loadContacts, setQuery, setLazyLoad } from '../../lib/contacts'
import { months } from '../config'
import './navbar.css'

class Navbar extends Component {
  static propTypes = {
    search: T.func.isRequired,
    count: T.number.isRequired,
    total: T.number.isRequired,
    setQuery: T.func.isRequired,
    setLazyLoad: T.func.isRequired,
    lazyLoad: T.bool,
    sendEmails: T.func.isRequired,
    loadingContacts: T.bool,
    selected: T.array,
    query: T.string,
  }

  state = { toRecontact: 0 }

  onChange = curry((type, e) => {
    if (type === 'emailErrors') {
      const value = e.target.checked
      console.log(value)
      this.props.setQuery(value ? 'emailErrors' : null)
      this.search()
    } else if (type === 'month') {
      this.props.setQuery(`month:${e}`)
      this.search()
    } else {
      const value = e
      this.props.setQuery(value.length ? value : null)
      this.search()
    }
  })

  search = debounce(() => {
    const value = this.props.query
    this.props.search({ q: value })
  }, 400)

  render() {
    const {
      props: { query, total, loadingContacts, selected, sendEmails },
    } = this
    return [
      <div key="modal">
        <div id="modalEmails" className="modal" style={{ minHeight: '300px', maxWidth: '150px' }}>
          <div className="modal-content">
            <p>Quel mois recontacter ?</p>
            <a className="dropdown-trigger" href="#!" data-target="dropdownMonthsContact">
              <i className="material-icons ">subdirectory_arrow_right</i>
              {months[this.state.toRecontact]}
            </a>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              onClick={() => sendEmails(this.state.toRecontact)}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Envoyer
            </a>
          </div>
        </div>
      </div>,
      <div key="nav" className="navbar-fixed">
        <ul id="dropdownMonths" className="dropdown-content">
          {months.map((month, i) => (
            <li key={month}>
              <a href="#!" onClick={() => this.onChange('month', i)}>
                {month}
              </a>
            </li>
          ))}
        </ul>
        <ul id="dropdownMonthsContact" style={{ zIndex: 1000, height: '250px' }} className="dropdown-content">
          {months.map((month, i) => (
            <li key={month}>
              <a href="#!" id={i} onClick={() => this.setState({ toRecontact: i })}>
                {month}
              </a>
            </li>
          ))}
        </ul>
        <ul id="dropdownActions" className="dropdown-content">
          {selected.length && (
            <li>
              <a className="modal-trigger" href="#modalEmails">
                <i className="material-icons prefix">email</i>Envoi Emails
              </a>
            </li>
          )}
          <li>
            <Link href="/contact">
              <a>
                <i className="material-icons prefix">person_add</i>
                Nouvelle fiche
              </a>
            </Link>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <div className="input-field" style={{ flex: 2 }}>
              <input
                ref={this.q}
                value={query || ''}
                id="search"
                type="search"
                required
                onChange={this.onChange('q')}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
            </div>
            <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
              <a className="dropdown-trigger" href="#!" data-target="dropdownMonths">
                Mois
                <i className="material-icons ">arrow_drop_down</i>
              </a>
              <label title="Montrer les emails en erreur">
                <input checked={query === 'emailErrors'} type="checkbox" onChange={this.onChange('emailErrors')} />
                <span />
              </label>
              <strong> {`${total} contacts`}</strong>
              <a className="dropdown-trigger right" href="#!" data-target="dropdownActions">
                <i className="material-icons ">menu</i>
                {selected.length ? <span>{`${selected.length} Sélectionnés`}</span> : undefined}
              </a>
            </div>
          </div>
          <div key="progress" className="progress">
            {loadingContacts && <div className="indeterminate" />}
          </div>
        </nav>
      </div>,
    ]
  }
}

export default connect(
  state => ({
    query: state.query,
    count: state.contacts.length,
    total: state.count,
    lazyLoad: state.lazyLoad,
    loadingContacts: state.loadingContacts,
  }),
  dispatch => ({
    setQuery: q => dispatch(setQuery(q)),
    setLazyLoad: q => dispatch(setLazyLoad(q)),
    search: params => dispatch(loadContacts(params)),
  })
)(Navbar)
