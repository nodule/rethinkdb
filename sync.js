module.exports = {
  name: "sync",
  ns: "rethinkdb",
  description: "`sync` ensures that writes on a given table are written to permanent storage. Queries that specify soft durability (`{durability: 'soft'}`) do not give such guarantees, so sync can be used to ensure the state of these queries. A call to sync does not return until all previous writes to the table are persisted.",
  phrases: {
    active: "Syncing table"
  },
  ports: {
    input: {
      query: {
        type: "function",
        title: "Query",
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
  fn: function sync(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        out: $.create($.query.sync())
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