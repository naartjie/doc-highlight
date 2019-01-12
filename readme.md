## Assumptions

- node version: `v10.15.0` 
- I interpreted "http://localhost​/documents/1​ should render" to mean that it's not a JSON API but SSR HTML.
- less dependencies is better, so instead of leaning on libraries, I tried using none
- Disclaimer: I understand code injection, for sake of saving time, I cut the corner and I'm not escaping the document string, in a real-world application, if this prototype started getting used for templating, it's a security hole waiting to happen.
- marks only whole words - i.e. if you select "the" "`the`re" won't be selected

## Getting Started
```sh
# install dependencies
$ npm install

# in development, to auto-reload the server when you make changes
$ npm run dev

# open your browser
http://localhost:3000/documents/1

# make changes

# deploy using zeit now
$ now
```

