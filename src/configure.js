import '@babel/polyfill'
import 'dotenv/config'

import { join } from 'path'
import { promises } from 'fs'

const { writeFile } = promises

const config = {
  API_URL: process.env.API_URL,
  PAGINATION: process.env.PAGINATION,
  months: [
    'Ignorer',
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
}

const configure = async () => {
  await writeFile(join(__dirname, 'config.json'), JSON.stringify(config, null, 2))
  process.exit(0)
}

configure()
