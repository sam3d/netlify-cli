const { flags } = require('@oclif/command')
const Command = require('../../base')
const renderShortDesc = require('../../utils/renderShortDescription')

class SitesRepoCommand extends Command {
    async run() {
        const { flags } = this.parse(SitesRepoCommand)
        const { api } = this.netlify
    }
}

SitesRepoCommand.description = `${renderShortDesc('Re-configure CI/CD (advanced)')}

Reconfigure the CI/CD settings for an existing site. Does not link to the current working directory.
`

SitesRepoCommand.flags = {
    name: flags.string({
        char: 'n',
        description: 'name of site'
    })
}

module.exports = SitesRepoCommand
