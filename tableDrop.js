module.exports = {
  name: "tableDrop",
  ns: "rethinkdb",
  description: "Table Drop",
  phrases: {
    active: "Dropping table"
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
        required: true
      }
    },
    output: {
      out: {
        type: "function",
        title: "Query"
      }
    }
  },
  fn: function tableDrop(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.db.tableDrop($.tableName))
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