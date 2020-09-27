import request from 'supertest'
import app from '../config/app'

const testUrl = '/test_content_type'

describe('Content-Type Middleware', () => {
  test('Should return content type as json', async () => {
    app.get(testUrl, (req, res) => {
      res.send('')
    })
    await request(app)
      .get(testUrl)
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    const testUrlXml = `${testUrl}_xml`
    app.get(testUrlXml, (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get(testUrlXml)
      .expect('content-type', /xml/)
  })
})
