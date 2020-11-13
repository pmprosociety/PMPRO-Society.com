# Running PM Pro

## Prerequisites

The PMPRO website works with NodeJS. We recommend using the latest version 14 available from the [NodeJS website](https://nodejs.org/en/). On MacOS and other Unix systems the [Node Version Manager](https://github.com/creationix/nvm) is a good way to quickly install the latest version of NodeJS and keep it up to date.

After successful installation, the `node` and `npm` commands should be available on the terminal to check that everything installed OK.    

```
$ node --version
v14.15.0
```

```
$ npm --version
6.14.5
```

> **Note:** Running NodeJS and npm should not require admin or root privileges

## Start a local copy
Everything you need to run a local site is nicely packaged in the code thanks to [VuePress](https://vuepress.vuejs.org/)- a popular static site generator. Run the command below to give it a shot!

```sh
npm run dev
```
When you're done, point your browser to localhost with the correct port and you're running your own PMPRO!
