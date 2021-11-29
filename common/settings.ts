export const SERVER = {
  PORT: '9000',
  HOST: 'localhost',
  ADDRESS: () => `${SERVER.HOST}:${SERVER.PORT}`,
  URL: () => `http://${SERVER.ADDRESS()}`,
}
