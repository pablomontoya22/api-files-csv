import 'dotenv/config'
import { doRequest, buildOptions, parseCSV } from "./utils.js"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  next()
})

app.get("/files/data", async (req, res) => {
  const data = [], resp = JSON.parse(await getFiles()), file = req.query.fileName?.trim()
  for (const fileName of file ? resp.files.filter(a => a === file) : resp.files) {
    data.push({
      file: fileName,
      lines: parseCSV(await getContent(fileName))
    })
  }
  res.json(data)
})

app.get("/files/list", async (_req, res) => {
  res.end(await getFiles())
})

const getFiles = async () => {
  return await doRequest(buildOptions(`secret/files`))
}

const getContent = async fileName => {
  return await doRequest(buildOptions(`secret/file/${fileName}`))
}

app.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
