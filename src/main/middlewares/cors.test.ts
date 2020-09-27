import request from 'supertest'
import app from '../config/app'

const testUrl = '/test_cors'

describe('CORS Middleware', () => {
  test('Should enable cors', async () => {
    app.get(testUrl, (req, res) => {
      res.send()
    })
    await request(app)
      .get(testUrl)
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
