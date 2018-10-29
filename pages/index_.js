import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import ContactList from '../components/ContactList'

const API_URL = 'http://localhost:3038'

async function fetchContacts(params = {}) {
  const data = await fetch(`${API_URL}/contacts`, { cors: true })
  return await data.json()
}

class Index extends Component {
  static async getInitialProps() {
    const data = await fetchContacts()
    console.log({ data })
    return { contacts: data }
  }
  render() {
    return <ContactList />
  }
}

export default Index
