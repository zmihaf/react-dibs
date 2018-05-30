# react-dibs

> I call Dibs!

*react-dibs is the client component for [Dibs](https://github.com/traveloka/dibs)*

## API

`react-dibs` exposes a render props component that needs the following props:
* `server: string` the address of the dibs server (there is one currently live on staging, `https://dibs.test.tvlk.cloud`)
* `username: string` for tools with auth0, you can fill this with `state.oidc.token.userEmail`

and will provides a render props which consists of:
* `pageVisitorList: array` list of users that currently opening the same page as you, sorted by the first one to visit . For further explanation, please check [Dibs](https://github.com/traveloka/dibs)'s documentation

## Getting started

* Install
```
  yarn add react-dibs

```
* Import
```
  import CallDibs from 'react-dibs';

  ...

  render() {
    return (
      <CallDibs
        server={serverAddress}
        username={userEmail}
      >
        {info => console.log(info)} // { pageVisitorList: [] }
      </CallDibs>
    );
  }
```
