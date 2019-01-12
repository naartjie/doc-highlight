const http = require('http')
const { documents } = require('./data.json')
const { PORT = 3000 } = process.env

const html = require('fs').readFileSync('./server/index.html', 'utf-8').toString()
const re = /\/documents\/(\d)/

const route = path => {
  const [_x, idx = 0] = [] = path.match(re) || []
  const doc = documents[idx - 1]

  return {
    status: doc ? 200 : 404,
    body: html.replace('{{document}}', doc || 'Oops, page not found'),
  }
}

http
  .createServer(({ url }, res) => {
    const { status, body } = route(url)

    res.writeHead(status, { 'Content-Type': 'text/html' })
    res.end(body)
  })
  .listen(PORT, () =>
    console.log(`server listening on http://localhost:${PORT}`))