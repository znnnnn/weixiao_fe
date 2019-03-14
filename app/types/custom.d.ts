import moduleName from 'module'

declare module NodeJS {
  interface Global {
    // fetch: GlobalFetch
    axios: 'aaaa'
  }
}