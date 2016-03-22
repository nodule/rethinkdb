module.exports = {
  name: "tableCreate",
  ns: "rethinkdb",
  description: "Table Create",
  phrases: {
    active: "Creating table"
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
  fn: function tableCreate(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.db.tableCreate($.tableName))
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