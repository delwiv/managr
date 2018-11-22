/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { equals } from 'ramda'

import { viewContact, updateContact, deleteContact } from '../lib/contacts'
import './contact.css'

const labelStyle = {
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'stretch',
}

class Contact extends Component {
  static propTypes = {
    contact: T.object.isRequired,
    loading: T.bool,
    viewContact: T.func.isRequired,
    updateContact: T.func.isRequired,
    deleteContact: T.func.isRequired,
    contactId: T.string.isRequired,
  }

  static getInitialProps = async params => {
    return { contactId: params.query.contactId }
  }

  constructor(props) {
    super(props)
    this.state = { contact: props.contact }
    this.props.viewContact(this.props.contactId)
  }

  componentDidUpdate = prevProps => {
    if (!equals(prevProps.contact, this.props.contact)) {
      this.setState({ contact: this.props.contact })
    }
  }

  componentDidMount() {
    try {
      window.M.AutoInit()
    } catch (err) {}
  }

  handleChange = field => event => {
    this.setState({
      contact: {
        ...this.state.contact,
        [field]: event.target.value,
      },
    })
  }

  getInput = contact => (field, custom, options = {}) => {
    const label = custom || `${field[0].toUpperCase()}${field.slice(1)}`
    return (
      <div className="input-group">
        <label htmlFor={field} style={labelStyle}>
          {label}
        </label>
        <input
          type="text"
          name={field}
          id={field}
          value={contact[field]}
          onChange={this.handleChange(field)}
          {...options}
        />
      </div>
    )
  }

  updateContact = () => {
    this.props.updateContact(this.state.contact)
  }

  deleteContact = () => {
    this.props.deleteContact(this.state.contact._id)
  }

  render() {
    const {
      state: { contact },
      updateContact,
      deleteContact,
      handleChange,
      openUrl,
    } = this

    const getInput = this.getInput(contact)
    const hasChanged = !equals(contact, this.props.contact)

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: '10px',
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              // alignItems: 'center',
              width: '90%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                flex: 1,
              }}
            >
              <fieldset>
                <legend>Adresse</legend>
                {getInput('nom')}
                {getInput('adresse')}
                {getInput('cp')}
                {getInput('departement')}
                {getInput('ville')}
              </fieldset>
              <fieldset>
                <legend>Infos</legend>
                {getInput('cible')}
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 9 }}>{getInput('site', null /*{ defaultValue: 'http://'}*/)}</div>
                  <a
                    className={`btn right ${!contact.site && 'disabled'}`}
                    href={contact.site}
                    target="_blank"
                    style={{ flex: 1 }}
                    rel="noopener noreferrer"
                  >
                    Ouvrir
                  </a>
                </div>
                {getInput('vu')}
                {getInput('envoi_mail', 'Mail envoyé')}
                {getInput('mois')}
              </fieldset>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <fieldset>
                <legend>Responsable</legend>
                {getInput('responsable', 'Nom')}
                {getInput('tel_pro', 'Tel')}
                {getInput('mail', 'Mail')}
              </fieldset>
              <fieldset>
                <legend>Responsable 2</legend>
                {getInput('responsable2', 'Nom')}
                {getInput('tel_perso', 'Tel')}
                {getInput('mail2', 'Mail')}
              </fieldset>
              <fieldset>
                <legend>Responsable 3</legend>
                {getInput('responsable3', 'Nom')}
                {getInput('tel3', 'Tel')}
                {getInput('mail3', 'Mail')}
              </fieldset>
            </div>
          </div>
          <div
            style={{
              width: '90%',
              // alignSelf: 'center',
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              // justifyContent: 'center',
            }}
          >
            <fieldset>
              <legend>Notes</legend>
              <textarea className="text" rows={8} value={contact.notes} onChange={handleChange('notes')} />
            </fieldset>
          </div>
          <div className="controls-wrap">
            <div className="controls">
              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Supprimer ?</h4>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="btn modal-close waves-effect blue">
                    Annuler
                  </a>
                  <a onClick={deleteContact} href="#!" className="btn modal-close waves-effect red">
                    Supprimer
                  </a>
                </div>
              </div>
              <a className="waves-effect waves-light btn red modal-trigger" href="#modal1">
                Supprimer
              </a>

              <input
                type="button"
                className="waves-effect waves-light btn blue"
                disabled={!hasChanged}
                onClick={updateContact}
                id="save"
                value="Sauver"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contact: state.current,
  loading: state.loadingContact,
})

const mapDispatchToProps = dispatch => ({
  viewContact: params => dispatch(viewContact(params)),
  updateContact: params => dispatch(updateContact(params)),
  deleteContact: params => dispatch(deleteContact(params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
