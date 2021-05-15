# react-npm-lib-template

npm react library release template

## Development

- create react component in `src`
- make sure, the component are exported (named or default) in `src/index.js`
- run `npm run build` to build the component to `dist`

use `example` to render the developed component in create-react-app, see the README in [`example`](./example/README.md):
- open terminal, run `npm run watch` will keep watch changes in `src`, if new changes made, it will keep building to `dist`
- open another terminal, run `cd example && npm start`

## Publish

```bash
npm run build
npm publish
```
