export const SERVER = {
  PORT: '9000',
  HOST: 'localhost',
  ADDRESS: () => `${SERVER.HOST}:${SERVER.PORT}`,
  PROXY_URL: 'http://localhost:8081',
}
