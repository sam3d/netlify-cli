/* Get flags from `raw` data

Needed for commands using Command.strict = false
*/

/** Usage:
const { flags, raw } = this.parse(addonsCreateCommand)
// flags = {}
const rawFlags = parseRawFlags(raw)
// rawFlags = {stuff: yay!}
*/

module.exports = function parseRawFlags(raw) {
  const rawFlags = raw.reduce((acc, curr, index, array) => {
    if (curr.input.match(/^-{1,2}/)) {
      const key = curr.input.replace(/^-{1,2}/, '')
      const next = array[index+1]
      if (!next) {
        acc[key] = true
      } else if (next && next.input && next.input.match(/^-{1,2}/)) {
        acc[key] = true
      } else {
        acc[key] = (next) ? truthy(next.input) : true
      }
    }
    return acc
  }, {})
  return rawFlags
}

function truthy(value) {
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return value
}
