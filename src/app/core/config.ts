export const CONFIG = {
  env: 'default',
  production: false,
  api: {
    url: 'https://qsmi-api.herokuapp.com/api',
    timeout: 3000,
    paths: {
      customers: '/customers',
      users: '/users',
    }
  }
}