// err, the api is weird:
// query.run(conn, callback)
// query.run(options[, callback])
// where is the connection in the second one.
// ignoring options for now.
output = [input.query, 'run', input.conn]
