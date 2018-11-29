const { flags } = require('@oclif/command')
const Command = require('../../base')
const renderShortDesc = require('../../utils/renderShortDescription')

class SitesRepoCommand extends Command {
    async run() {
        await this.authenticate();

        const { flags } = this.parse(SitesRepoCommand)
        const { api, site, state } = this.netlify


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
