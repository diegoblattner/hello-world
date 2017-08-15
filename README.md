# Dojo Chat App Monorepo

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)

A Multi App Monorepo for the Dojo Chat App

Contains apps for muiltiple platforms, and the internal packages that they rely on and share

- Desktop
- Native
- Server
- Web

## Install

- `git clone` the project
- `cd` into the root directory of the monorep
- `npm install` - This installs root dependencies and sinopia (private npm server) dependencies
- `npm run sin`
  - This changes the npm and yarn registry addresses to sinopia's local server and spins up the server
  - When exiting the project you can reset the registry addresses with `npm run unsin`

- In a new terminal window/tab:
  - Navigate to each package and app and `npm install`
  - __OR__
  - **Experimental:** You can run `lerna exec -- npm install` - [Docs](https://github.com/lerna/lerna#exec)
    - This should run `npm install` in all directories listed in `lerna.json` under `packages`
    - `lerna bootstrap` to symlink all of the packages together and into the apps

- In several new terminal windows/tabs, navigate to each app and `npm start`

## Sinopia Alternative

[Verdaccio](https://github.com/verdaccio/verdaccio) is a fork of Sinopia which is still being developed and has a decent community of users/developers. Might be a good alternative.
