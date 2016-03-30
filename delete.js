module.exports = {
  name: "delete",
  ns: "rethinkdb",
  async: true,
  description: "delete document.",
  phrases: {
    active: "Deleting document"
  },
  ports: {
    input: {
      "in": {
        type: "function",
        title: "Query",
        async: true,
        required: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.in.delete()
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