import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import Link from 'next/link'

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
    sendMails: T.func.isRequired,
    loadingContacts: T.bool,
    selected: T.array,
    query: T.string,
  }

  onChange = e => {
    const value = e.target.value
    this.props.setQuery(value.length ? value : null)
    this.search()
  }

  search = debounce(() => {
    const value = this.props.query
    this.props.search({ q: value })
  }, 400)

  render() {
    const {
      props: { query, total, loadingContacts, selected, sendMails },
    } = this
    return [
      <div key="nav" className="navbar-fixed">
        <ul id="dropdownMonths" className="dropdown-content">
          {months.map((month, i) => (
            <li key={month}>
              <a href="#!" onClick={() => this.onChange({ target: { value: `month:${i}` } })}>
                {month}
              </a>
            </li>
          ))}
        </ul>
        <ul id="dropdownActions" className="dropdown-content">
          <li>
            <a onClick={sendMails}>
              <i className="material-icons prefix">alternate_email</i>
              Envoi emails
            </a>
          </li>
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
              <input ref={this.q} value={query || ''} id="search" type="search" required onChange={this.onChange} />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
            </div>
            <div style={{ paddingRight: '20px', paddingLeft: '20px' }}>
              <a className="dropdown-trigger" href="#!" data-target="dropdownMonths">
                Mois
                <i className="material-icons ">arrow_drop_down</i>
              </a>
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
