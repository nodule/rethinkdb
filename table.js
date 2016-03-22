module.exports = {
  name: "table",
  ns: "rethinkdb",
  description: "RethinkDB table",
  phrases: {
    active: "Selecting table {{input.tableName}}"
  },
  ports: {
    input: {
      db: {
        type: "function",
        title: "Database",
        required: true
      },
      tableName: {
        type: "string",
        title: "Table Name",
        description: "Select all documents in a table. This command can be chained with other commands to do further processing on the data."
      }
    },
    output: {
      out: {
        type: "function",
        title: "Query"
      }
    }
  },
  fn: function table(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.db.table($.tableName))
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