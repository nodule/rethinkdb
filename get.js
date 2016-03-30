module.exports = {
  name: "get",
  ns: "rethinkdb",
  async: true,
  description: "RethinkDB get",
  phrases: {
    active: "Get {{input.id}}"
  },
  ports: {
    input: {
      table: {
        type: "function",
        title: "Table",
        required: true
      },
      id: {
        type: "string",
        title: "ID",
        async: true,
        description: "Get a document by primary key",
        fn: function __ID__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.create($.table.get($.id))
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