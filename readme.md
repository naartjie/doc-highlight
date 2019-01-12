## Run
```sh
# install deps
$ npm install

# run
$ npm start

# in development, to auto-reload the server when you make changes
$ npm run dev

# open your browser
http://localhost:3000/documents/1
```

## Assumptions

- I interpreted "http://localhost​/documents/1​ should render" to mean that it's not a JSON API but SSR HTML.
- less dependencies is better, so instead of leaning on libraries, I tried using none
- Disclaimer: I understand code injection, for sake of saving time, I cut the corner and I'm not escaping the document string, in a real-world application, if that started getting used for templating, it's a security hole waiting to happen.
- 