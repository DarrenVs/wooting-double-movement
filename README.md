# Wooting Double movement

## Dependencies

- [Rust](https://www.rust-lang.org/)
- Node (Recommend using nvm and latest v10 node)
- [Yarn](https://yarnpkg.com/)
- VS 2019 C++ Desktop development package

## Building

Firstly run yarn to install all the dependencies

```
yarn
```

### Devving

First start the dev server which watches for changes and recompiles

```
yarn dev
```

Start the application (you'll need to use a different terminal instance than the `yarn dev`)

```
yarn start
```

### Deploying

Make a production build of all the code

```
yarn build
```

Build it into a package

```
yarn dist
```
