const blacklist = require('metro-bundler/build/blacklist')
const path = require('path')

module.exports = {
  getProjectRoots () {
    return [
      path.join(__dirname, '..', '..', 'packages'),
      __dirname
    ]
  },
  getBlacklistRE: () => blacklist([
    path.join(__dirname, '..', '..', 'node_modules'),
    path.join(__dirname, '..', '..', 'sinopia'),
    path.join(__dirname, '..', 'desktop'),
    path.join(__dirname, '..', 'server'),
    path.join(__dirname, '..', 'web')
  ])
}
