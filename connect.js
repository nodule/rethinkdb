module.exports = {
  name: "connect",
  ns: "rethinkdb",
  description: "RethinkDB connect",
  type: "provider",
  phrases: {
    active: "Creating rethink DB connection: {{input.host}}:{{input.port}}/{{input.db}}"
  },
  ports: {
    input: {
      rethinkdb: {
        type: "function",
        title: "Rethink DB",
        description: "RethinkDB",
        required: true
      },
      options: {
        title: "Options",
        type: "object",
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "the host to connect to",
            "default": "localhost"
          },
          port: {
            type: "string",
            title: "Port",
            description: "the port to connect on",
            "default": "28015"
          },
          db: {
            type: "string",
            title: "Database",
            description: "the default database to connect to",
            "default": "test"
          },
          authKey: {
            type: "string",
            title: "Authentication Key",
            description: "the authentication key"
          }
        }
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error"
      },
      conn: {
        type: "function",
        title: "Connection"
      }
    }
  },
  fn: function connect(input, $, output, state, done, cb, on) {
    var r = function() {
      $.rethinkdb.connect($.options, function connectCallback(error, conn) {
        cb({
          error: error,
          conn: conn
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}