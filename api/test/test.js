import "../src/server.js"
import request from "request"
import assert from "assert"

describe("server", () => {
    describe("Server status and response", () => {
        it("Status response should be equal 200 and must get file data", done => {
            request.get("http://localhost:3000/files/data", (err, response, body) => {
                if (err) {
                    done(err)
                } else {
                    assert.equal(response.statusCode, 200)
                    const json = JSON.parse(body)
                    assert.notEqual(json.length, 0)
                    done()
                }
            })
        })
    })
})
