module.exports = {
  name: "db",
  ns: "rethinkdb",
  description: "RethinkDB database",
  phrases: {
    active: "Selecting database {{input.db}}"
  },
  ports: {
    input: {
      rethinkdb: {
        type: "function",
        title: "RethinkDB",
        required: true
      },
      dbName: {
        type: "string",
        title: "Database Name",
        description: "Select a database"
      }
    },
    output: {
      db: {
        type: "function",
        title: "Database"
      }
    }
  },
  fn: function db(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        db: $.create($.rethinkdb.db($.dbName))
      };
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}