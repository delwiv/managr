/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { equals, map, path } from 'ramda'

import { viewContact, updateContact, deleteContact } from '../lib/contacts'
import { months, depts } from '../src/config'
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
    window.M.updateTextFields()
    // window.M.textareaAutoResize('#notes')
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
    const label = options.icon ? '' : custom || `${field[0].toUpperCase()}${field.slice(1)}`
    const width = options.width || 12
    const Icon = () => <i className="material-icons prefix">{options.icon}</i>
    const Right = () => (
      <div className={`input-field col s${12 - width}`}>
        <i className="material-icons prefix">{options.right.icon}</i>
        <input value={options.right.label} type="text" />
      </div>
    )
    return (
      <div className="row">
        <div className={`input-field col s${width}`}>
          {options.icon && <Icon />}
          <input
            id={field}
            name={field}
            value={contact[field]}
            onChange={this.handleChange(field)}
            type="text"
            className="validate"
          />
          <label htmlFor={field}>{label}</label>
          {/* <div className="">
             <span style={{}}>{label}</span>
             <input
               type="text"
               name={field}
               id={field}
               value={contact[field]}
               onChange={this.handleChange(field)}
               {...options}
             />
           </div>*/}
        </div>
        {options.right && <Right />}
      </div>
    )
  }

  updateContact = () => {
    this.props.updateContact(this.state.contact)
  }

  deleteContact = () => {
    this.props.deleteContact(this.state.contact._id)
  }

  handelDept = e => {
    console.log(e.target.value)
  }

  render() {
    const {
      state: { contact },
      updateContact,
      deleteContact,
      handleChange,
      handleMonth,
      handleDept,
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
                <div className="row">
                  <div className="col s12">{getInput('nom', null, { icon: 'home' })}</div>
                </div>
                <div className="row">
                  <div className="col s12">{getInput('adresse', null, { icon: 'location_on' })}</div>
                </div>
                <div className="row">
                  <div className="col s4">{getInput('cp', null, { icon: 'local_post_office' })}</div>
                  <div className="col s8">{getInput('ville', null, { icon: 'business' })}</div>
                </div>
                <div className="row">
                  <div className="col s12">
                    {getInput('departement', null, {
                      icon: 'flag',
                      width: 4,
                      right: {
                        icon: 'informations',
                        label: path(['name'], depts.find(d => d.code === contact.departement)) || '',
                      },
                    })}
                  </div>
                  {/*<label htmlFor="dept">Département</label>
                    <ul id="dropdownDept" className="dropdown-content">
                      {map(({ code, name }) => {
                        return (
                          <li key={code} onClick={handleDept}>
                            <a href="#!">{`${code} - ${name}`}</a>
                          </li>
                        )
                      }, depts)}
                    </ul>
                    <a id="dept" className="dropdown-trigger black-text" href="#!" data-target="dropdownDept">
                      {`${path(['code'], depts.find(d => d.code === contact.departement))} - ${path(
                        ['name'],
                        depts.find(d => d.code === contact.departement)
                      )}`}
                      <i className="material-icons ">arrow_drop_down</i>
                    </a>*/}
                </div>
              </fieldset>
              <fieldset>
                <legend>Infos</legend>
                <div className="row">
                  <div className="col s9">{getInput('site', null, { icon: 'http' })}</div>
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
                <div className="row">
                  <div className="col s6">{getInput('cible', null, { icon: 'gps_fixed' })}</div>
                  <div className="col s6">{getInput('vu_le', 'Vu le', { icon: 'remove_red_eye' })}</div>
                </div>

                <div className="row">
                  <div className="input-group col s12">
                    <i className="material-icons prefix" style={{ width: '45px', alignSelf: 'flex-end' }}>
                      subdirectory_arrow_right
                    </i>
                    <ul id="dropdownMonths" className="dropdown-content">
                      {months.map((month, i) => (
                        <li key={month}>
                          <a id={month} href="#!" onClick={handleMonth}>
                            {month}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      id="mois_contact"
                      className="dropdown-trigger black-text input-field "
                      href="#!"
                      data-target="dropdownMonths"
                    >
                      {months[contact.mois_contact]}
                      <i className="material-icons ">arrow_drop_down</i>
                    </a>
                  </div>
                </div>
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
                <div className="row">
                  <div className="col s7">{getInput('responsable', 'Nom', { icon: 'account_circle' })}</div>
                  <div className="col s5">{getInput('tel_pro', 'Tel', { icon: 'phone' })}</div>
                </div>
                <div className="row">
                  <div className="col s7">{getInput('mail', 'Mail', { icon: 'alternate_email' })}</div>
                  <div className="col s5">{getInput('envoi_mail', 'Mail envoyé', { icon: 'date_range' })}</div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Responsable 2</legend>
                <div className="row">
                  <div className="col s7">{getInput('responsable2', 'Nom', { icon: 'account_circle' })}</div>
                  <div className="col s5">{getInput('tel_perso', 'Tel', { icon: 'phone' })}</div>
                </div>
                <div className="row">
                  <div className="col s12">{getInput('mail2', 'Mail', { icon: 'alternate_email' })}</div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Responsable 3</legend>
                <div className="row">
                  <div className="col s7">{getInput('responsable3', 'Nom', { icon: 'account_circle' })}</div>
                  <div className="col s5">{getInput('tel3', 'Tel', { icon: 'phone' })}</div>
                </div>
                <div className="row">
                  <div className="col s12">{getInput('mail3', 'Mail', { icon: 'alternate_email' })}</div>
                </div>
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
              <textarea
                className="materialize-textarea"
                rows={8}
                id="notes"
                value={contact.notes}
                onChange={handleChange('notes')}
              />
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
