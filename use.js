module.exports = {
  name: "use",
  ns: "rethinkdb",
  description: "RethinkDB use",
  phrases: {
    active: "Changing to database {{input.dbName}}"
  },
  ports: {
    input: {
      conn: {
        type: "function",
        title: "Connection",
        required: true
      },
      dbName: {
        type: "string",
        title: "Database Name",
        description: "change the default database on this connection"
      }
    },
    output: {}
  },
  fn: function use(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.use($.dbName);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}