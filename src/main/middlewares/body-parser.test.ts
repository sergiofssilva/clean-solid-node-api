import request from 'supertest'
import app from '../config/app'

const testUrl = '/test_body_parser'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post(testUrl, (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post(testUrl)
      .send({ name: 'Sergio' })
      .expect({ name: 'Sergio' })
  })
})
