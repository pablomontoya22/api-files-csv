import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'  
import { requestFiles, searchFile } from "../actions/actions"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CustomTable from "./shared/CustomTable"
import SearchForm from "./shared/SearchForm"
import Loading from "./shared/Loading"
import './App.css'

const App =  () => {
  const [fileName, setFileName] = useState("")
  const [loading, setLoading] = useState(true)

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const rows = fileName ? state.files.filtered : state.files.all

  const NoData = () => { return <div className="noData">No hay data</div> }

  useEffect(() => {
    const loadFiles = async () => {
      setLoading(true)
      if (fileName) {
        dispatch(await searchFile(fileName))
      } else {
        dispatch(await requestFiles(state))
      }
      setLoading(false)
    }
    loadFiles()
  }, [fileName])

  return (
    <>
      {loading && <Loading/>}
      <Container>
        <SearchForm setFileName={setFileName} />
      {
        rows.map((a, index) => {
          return (
            <Row key={`row${index}`}>
              <Col>
                <h3 className="title" key={a.file}>{a.file}</h3>
                {
                  a.lines.length
                    ? <CustomTable lines={ a.lines }/>
                    : <NoData/>
                }
              </Col>
            </Row>
          )
        })
      }
      </Container>
    </>
  )
}

export default App