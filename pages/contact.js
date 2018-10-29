/* eslint-disable jsx-a11y/anchor-is-valid */

import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const API_URL = 'http://localhost:3038'

const fetchContact = async id => {
  const data = await fetch(`${API_URL}/contacts/${id}`, { cors: true })
  return data.json()
}

const labelStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
}

class Contact extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired,
  }
  static getInitialProps = async params => {
    console.log({ params })
    const contact = await fetchContact(params.query.contactId)
    return { contact }
  }
  constructor(props) {
    super(props)
    this.state = { contact: props.contact }
  }

  handleChange = field => event => {
    console.log({ [field]: event.target.value })
  }

  getDepartment = () => {
    return this.state.contact.departement || '44 - Loire Atlantique'
  }

  render() {
    const {
      state: { contact },
      handleChange,
      getDepartment,
    } = this

    console.log({ contact })

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>{contact.nom}</h1>
        <p>
          <strong>{contact.adresse}</strong>
        </p>
        <p>
          <strong>
            {contact.cp} {contact.ville}
          </strong>
        </p>
        <div>
          <form
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
                flex: 1,
              }}
            >
              <fieldset>
                <legend>Adresse</legend>

                <label style={labelStyle}>
                  nom
                  <input type="text" name="nom" value={contact.nom} onChange={handleChange('nom')} />
                </label>
                <label style={labelStyle}>
                  adresse
                  <input type="text" name="adresse" value={contact.adresse} onChange={handleChange('adresse')} />
                </label>
                <label style={labelStyle}>
                  cp
                  <input type="text" name="cp" value={contact.cp} onChange={handleChange('cp')} />
                </label>
                <label style={labelStyle}>
                  departement
                  <input
                    type="text"
                    name="departement"
                    value={contact.departement}
                    onChange={handleChange('departement')}
                  />
                </label>
                <label style={labelStyle}>
                  ville
                  <input type="text" name="ville" value={contact.ville} onChange={handleChange('ville')} />
                </label>
              </fieldset>
              <fieldset>
                <legend>Infos</legend>
                <label style={labelStyle}>
                  cible
                  <input type="text" value={contact.cible} name="cible" onChange={handleChange('cible')} />
                </label>
                <label style={labelStyle}>
                  vu
                  <input type="text" value={contact.vu} name="vu" onChange={handleChange('vu')} />
                </label>
                <label style={labelStyle}>
                  date
                  <input type="text" value={contact.date} name="date" onChange={handleChange('date')} />
                </label>
                <label style={labelStyle}>
                  mois
                  <input type="text" value={contact.mois} name="mois" onChange={handleChange('mois')} />
                </label>
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
                <label style={labelStyle}>
                  Nom
                  <input
                    type="text"
                    value={contact.responsable}
                    name="Nom_resp1"
                    onChange={handleChange('responsable1')}
                  />
                </label>
                <label style={labelStyle}>
                  Tel
                  <input type="text" value={contact.tel_pro} name="Tel_resp1" onChange={handleChange('tel1')} />
                </label>
                <label style={labelStyle}>
                  Mail
                  <input type="text" value={contact.mail} name="Mail_resp1" onChange={handleChange('mail1')} />
                </label>
              </fieldset>
              <fieldset>
                <legend>Responsable 2</legend>
                <label style={labelStyle}>
                  Nom
                  <input type="text" name="Nom_resp2" onChange={handleChange('responsable2')} />
                </label>
                <label style={labelStyle}>
                  Tel
                  <input type="text" value={contact.tel_perso} name="Tel_resp2" onChange={handleChange('tel2')} />
                </label>
                <label style={labelStyle}>
                  Mail
                  <input type="text" name="Mail_resp2" onChange={handleChange('mail2')} />
                </label>
              </fieldset>
              <fieldset>
                <legend>Responsable 3</legend>
                <label style={labelStyle}>
                  Nom
                  <input type="text" name="Nom_resp3" onChange={handleChange('responsable3')} />
                </label>
                <label style={labelStyle}>
                  Tel
                  <input type="text" name="Tel_resp3" onChange={handleChange('tel3')} />
                </label>
                <label style={labelStyle}>
                  Mail
                  <input type="text" name="Mail_resp3" onChange={handleChange('mail3')} />
                </label>
              </fieldset>
            </div>
          </form>
        </div>
        <div
          style={{
            width: '50%',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        />
        {/*<Button variant="contained" color="primary">
                  Do nothing button
                </Button>*/}
      </div>
    )
  }
}

export default Contact
