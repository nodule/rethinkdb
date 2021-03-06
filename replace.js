module.exports = {
  name: "replace",
  ns: "rethinkdb",
  description: "Replace JSON document in a table.",
  phrases: {
    active: "Replacing document"
  },
  ports: {
    input: {
      query: {
        type: "function",
        title: "Table",
        required: true
      },
      data: {
        type: "any",
        title: "Document replace",
        description: ""
      }
    },
    output: {
      out: {
        type: "function",
        title: "Query"
      }
    }
  },
  fn: function replace(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.query.replace($.data))
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