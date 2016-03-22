module.exports = {
  name: "api",
  ns: "rethinkdb",
  description: "RethinkDB API",
  phrases: {
    active: "Requiring RethinkDB"
  },
  ports: {
    input: {},
    output: {
      rethinkdb: {
        type: "function",
        title: "RethinkDB"
      }
    }
  },
  dependencies: {
    npm: {
      rethinkdb: require('rethinkdb')
    }
  },
  fn: function api(input, $, output, state, done, cb, on, rethinkdb) {
    var r = function() {
      output = {
        rethinkdb: $.create(rethinkdb)
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}