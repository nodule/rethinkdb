module.exports = {
  name: "reconnect",
  ns: "rethinkdb",
  description: "RethinkDB reconnect",
  phrases: {
    active: "Reconnecting..."
  },
  ports: {
    input: {
      conn: {
        type: "function",
        title: "Connection",
        required: true
      },
      noreplyWait: {
        type: "boolean",
        title: "Wait for noreply writes",
        description: "whether to wait for noreply writes to complete before closing (default true). If this is set to false, some outstanding noreply writes may be aborted.",
        "default": true
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error"
      },
      conn: {
        type: "function",
        title: "Connection"
      }
    }
  },
  fn: function reconnect(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.reconnect({
        noreplyWait: $.noreplyWait
      }, function reconnectCallback(error, conn) {
        cb({
          error: error,
          conn: conn
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}