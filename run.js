module.exports = {
  name: "run",
  ns: "rethinkdb",
  description: "RethinkDB run",
  phrases: {
    active: "running..."
  },
  ports: {
    input: {
      query: {
        type: "function",
        title: "RethinkDB query",
        required: true
      },
      conn: {
        type: "function",
        title: "Connection",
        required: true
      },
      useOutdated: {
        type: "boolean",
        title: "Use Outdated",
        description: "whether or not outdated reads are OK",
        "default": false
      },
      timeFormat: {
        type: "string",
        "enum": ["native",
          "raw"
        ],
        title: "Time Format",
        description: "what format to return times in (default: `'native'`). Set this to `'raw'` if you want times returned as JSON objects for exporting.",
        "default": false
      },
      profile: {
        type: "boolean",
        title: "Profile",
        description: "whether or not to return a profile of the query's execution.",
        "default": false
      }
    },
    output: {
      error: {
        type: "object",
        title: "Error"
      },
      out: {
        type: "object",
        title: "Result",
        description: "A single JSON result, or a cursor, depending on the query"
      }
    }
  },
  fn: function run(input, $, output, state, done, cb, on) {
    var r = function() {
      $.query.run($.conn, function runCallback(error, out) {
        cb({
          error: error,
          out: out
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