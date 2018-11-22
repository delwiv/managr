import Router from 'next/router'
import chunk from 'lodash.chunk'

import buildAction from './actions'
import {
  fetchContacts,
  fetchContact,
  updateContact as ApiUpdateContact,
  deleteContact as ApiDeleteContact,
} from './api'

// const getStorage = () =>
//   typeof Storage !== 'undefined'
//     ? localStorage
//     : {
//         getItem: () => null,
//         setItem: () => null,
//         removeItem: () => null,
// }

export const initialState = {
  contacts: [],
  current: {},
  currentId: null,
  query: null,
  count: 0,
  // lazyLoad: getStorage().getItem('lazyLoad') || true,
}

// const wait = (duration = 0) => new Promise(resolve => setTimeout(resolve, duration))

const _loadContacts = buildAction('LOAD_CONTACTS')
const _viewContact = buildAction('VIEW_CONTACT')
const _updateContact = buildAction('UPDATE_CONTACT')
const _deleteContact = buildAction('DELETE_CONTACT')

export const loadContacts = (params = {}) => async (dispatch, getState) => {
  dispatch(_loadContacts.request(params))
  const { lazyLoad } = getState()
  const { contacts, count } = await fetchContacts(params, { lazyLoad })
  // const chunks = chunk(contacts, 50)
  // let done = 0
  // for (const cur of chunks) {
  // await wait()
  // ++done
  dispatch(_loadContacts.succeed({ contacts: contacts, count }))
  // }
  // if (acc.length === 10 || i === contacts.length - 1) {
  // await new Promise(resolve => setTimeout(resolve, 200))
  // dispatch(_loadContacts.succeed({ contacts: acc, count }))
  //   return []
  // }
  // dispatch(_loadContacts.succeed({ contacts, count }))
}

export const viewContact = params => async dispatch => {
  dispatch(_viewContact.request())
  const contacts = await fetchContact(params)
  dispatch(_viewContact.succeed(contacts))
}

export const setCurrent = pos => dispatch =>
  dispatch({
    type: 'SET_CURRENT',
    payload: pos,
  })

export const setLazyLoad = lazyLoad => dispatch =>
  dispatch({
    type: 'SET_LAZYLOAD',
    payload: lazyLoad,
  })

export const setQuery = q => dispatch =>
  dispatch({
    type: 'SET_QUERY',
    payload: q,
  })

export const updateContact = contact => async dispatch => {
  dispatch(_updateContact.request())
  const updated = await ApiUpdateContact(contact)
  dispatch(_updateContact.succeed(updated))
  Router.push('/')
}
export const deleteContact = contactId => async dispatch => {
  dispatch(_deleteContact.request())
  await ApiDeleteContact(contactId)
  dispatch(_deleteContact.succeed(contactId))
  Router.push('/')
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      }

    case _loadContacts.requested:
      return {
        ...state,
        loadingContacts: true,
      }
    case _loadContacts.succeeded: {
      const { count, contacts } = action.payload

      return {
        ...state,
        loadingContacts: false,
        contacts,
        count,
      }
    }
    case _viewContact.requested:
      return {
        ...state,
        loadingContact: true,
      }
    case _viewContact.succeeded:
      return {
        ...state,
        loadingContact: false,
        current: action.payload,
      }
    case _updateContact.requested:
      return {
        ...state,
        updatingContact: true,
      }
    case _updateContact.succeeded:
      return {
        ...state,
        updatingContact: false,
        current: action.payload,
        contacts: state.contacts.map(c => (c._id !== action.payload._id ? c : action.payload)),
      }
    case _deleteContact.requested:
      return {
        ...state,
        deletingContact: true,
      }
    case _deleteContact.succeeded:
      return {
        ...state,
        deletingContact: false,
        contacts: state.contacts.filter(c => c._id !== action.payload),
      }
    case 'SET_CURRENT':
      return {
        ...state,
        currentId: action.payload,
      }
    default:
      return state
  }
}
