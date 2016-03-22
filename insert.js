module.exports = {
  name: "insert",
  ns: "rethinkdb",
  description: "Insert JSON documents into a table. Accepts a single JSON document or an array of documents.",
  phrases: {
    active: "inserting"
  },
  ports: {
    input: {
      table: {
        type: "function",
        title: "Table",
        required: true
      },
      "in": {
        type: "object",
        async: true,
        title: "JSON Document(s)",
        description: "",
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: $.create($.table.insert($.in))
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