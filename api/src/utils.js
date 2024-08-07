import http from "http"

/**
 * Do a request with options provided.
 *
 * @param {Object} options
 * @return {Promise} a promise of request
 */
export const doRequest = options => {
    return new Promise((resolve, reject) => {
        const req = http.request(options, res => {
            let data = ""
            res.setEncoding("utf8")
            res.on("data", chunk => data += chunk)
            res.on("end", () => resolve(data))
        })
        req.on("error", err => reject(err))
        req.end()
    })
}

/**
 * Build options config for consuming the web service
 *
 * @param {endPoint} string: Path to consume
 * @param {httpMethod} string: HTTP Method requested (by default GET)
 * @return {JSON} JSON configuration for sending
 */
export const buildOptions = (endPoint, httpMethod = "GET") => {
    return {
        host: process.env.WS_HOST,
        port: process.env.WS_PORT,
        path: `/${process.env.WS_VERSION}/${endPoint}`,
        method: httpMethod,
        headers: {
          Authorization: `Bearer ${process.env.WS_TOKEN}`,
          "accept-Type": "application/json"
        }
    }
}

/**
 * Transform a string with a valid CSV structure to an array of object
 *
 * @param {data} string: A string with a valid CSV structure
 * @return {Array} Array of JSON with keys as CSV headers
 */
export const parseCSV = data => {
    if (data.includes('"code"')) {
      return []
    }
    const content = [], headers = []
    for (const line of data.split('\n')) {
      if (!headers.length) {
        headers.push(...line.split(','))
      } else {
        const row = line.split(',')
        if (headers.length === row.length) {
          const obj = {}
          for (let i = 1; i < headers.length; i++) {
            obj[headers[i]] = row[i]
          }
          content.push(obj)
        }
      }
    }
    return content
}