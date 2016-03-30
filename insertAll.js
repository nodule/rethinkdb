module.exports = {
  name: "insertAll",
  ns: "rethinkdb",
  description: "Insert JSON documents into a table. Accepts array of documents.",
  phrases: {
    active: "Inserting"
  },
  ports: {
    input: {
      table: {
        type: "function",
        title: "Table",
        required: true
      },
      "in": {
        type: "array",
        async: true,
        title: "JSON Document(s)",
        description: "",
        fn: function __IN__(data, source, state, input, $, output) {
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