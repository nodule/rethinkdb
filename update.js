module.exports = {
  name: "update",
  ns: "rethinkdb",
  async: true,
  description: "Update JSON documents in a table. Accepts a JSON document.",
  phrases: {
    active: "Updating document"
  },
  ports: {
    input: {
      query: {
        type: "function",
        title: "Table",
        required: true
      },
      "in": {
        type: "object",
        title: "Document update",
        async: true,
        description: "",
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: $.create($.query.update($.in))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        type: "function",
        title: "Query"
      }
    }
  },
  state: {}
}