const env = process.env;

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl(){
    return `http://${this.host}:${this.port}`
  }
};
