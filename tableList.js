module.exports = {
  name: "tableList",
  ns: "rethinkdb",
  description: "Table List",
  phrases: {
    active: "Getting tableList"
  },
  ports: {
    input: {
      db: {
        type: "function",
        title: "Database",
        required: true
      }
    },
    output: {
      out: {
        type: "function",
        title: "query"
      }
    }
  },
  fn: function tableList(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.db.tableList())
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