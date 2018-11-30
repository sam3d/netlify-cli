const { flags } = require('@oclif/command')
const Command = require('../../base')
const renderShortDesc = require('../../utils/renderShortDescription')
const inquirer = require("inquirer")

class SitesRepoCommand extends Command {
    async run() {
        await this.authenticate()
        const { flags } = this.parse(SitesRepoCommand)

        if (flags.id) this.searchById(flags.id)
        else if (flags.name) this.searchByName(flags.name)
        else this.searchWithPrompt()
    }

    async searchById(id) {
        console.log('Not implemented')
    }

    async searchByName(name) {
        console.log('Not implemented')
    }
    
    async searchWithPrompt() {
        const { api, state } = this.netlify

        const LIST_SITES = 'Show a list the sites I have access to'
        const USE_NAME = 'Use the name of the site'
        const USE_ID = 'Use the ID of the site'

        const { type } = await inquirer.prompt({
            name: 'type',
            type: 'list',
            message: 'How would you select the site to modify?',
            choices: [LIST_SITES, USE_ID, USE_NAME]
        })

        if (type === LIST_SITES) {
            console.log("Loading a list")
        }

        if (type === USE_NAME) {
            console.log('What is your name?')
        }

        if (type === USE_ID) {
            console.log('What is the site ID?')
        }
    }
}

SitesRepoCommand.description = `${renderShortDesc('Re-configure CI/CD (advanced)')}

Reconfigure the CI/CD settings for an existing site. Does not link to the current working directory.
`

SitesRepoCommand.examples = [
    'netlify sites:repo',
    'netlify sites:repo --name my-site-name',
    'netlify sites:repo --id 123-123-123-123'
]

SitesRepoCommand.flags = {
    id: flags.string({
        description: 'ID of site to modify CI/CD'
    }),

    name: flags.string({
        char: 'n',
        description: 'Name of site to modify CI/CD'
    })
}

module.exports = SitesRepoCommand
