module.exports = {
  name: "close",
  ns: "rethinkdb",
  description: "RethinkDB close",
  phrases: {
    active: "Closing connection"
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
      }
    }
  },
  fn: function close(input, $, output, state, done, cb, on) {
    var r = function() {
      $.conn.close({
        noreplyWait: $.noreplyWait
      }, function closeCallback(error) {
        cb({
          error: error
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