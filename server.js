const express = require('express')
const app = express()
const config = require('./config')
const port = config.port || 5000
const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
  })

  app.get('/trends', async(req, res, next) => {
    try {
      const id = req.query.id
      const trends = await client.get('trends/place.json', {
        id: id,
      })
      res.send(trends)
    } catch (error) {
      next(error)
    }
  })

  app.get('/tweets', async(req, res, next) => {
    try {
      const q = req.query.q
      //const result_type = req.query.result_type
      const tweets = await client.get('search/tweets', {
        q: q,
        result_type: 'popular',
      })
      res.send(tweets)
      console.log(tweets)
    } catch (error) {
      next(error)
    }
  })

 app.get('/', (req, res) => { 
   res.send('hello twitter')
 })


app.listen(port, () => console.log(`listening on port ${port}`))