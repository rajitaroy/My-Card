#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Rajita Roy'),
  handle: chalk.cyan('@rajitaroy'),
  // labelWork: chalk.white.bold('      Work:'),
  // work: chalk.white('In progress'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  instagram: chalk.green('https://instagram.com/rajita._roy'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.green('https://twitter.com/RajitaRoy1'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.green('https://github.com/rajitaroy'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.green('https://linkedin.com/in/rajita-roy'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.green('https://portfolio-rajita.herokuapp.com/'),
  labelCard: chalk.white.bold('      npm:'),
  npx: chalk.white('https://www.npmjs.com/~rajitaroy'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
// const working = `${data.labelWork}  ${data.work}`
const instagramming= `${data.labelInstagram}  ${data.instagram}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  instagramming +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
