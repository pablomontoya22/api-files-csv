import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm = props => {
  const { setFileName } = props

  const submitHandler = e => {
    e.preventDefault()
    setFileName(e.target.fileName.value)
  }

  return (
    <Form className="formStyle" onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col xs="12">
          <Form.Label htmlFor="fileName">
            <strong>Buscar archivo</strong>
          </Form.Label>
        </Col>
        <Col xs="4">
          <Form.Control
            className="mb-2"
            id="fileName"
            placeholder="archivo.csv" />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

SearchForm.propTypes = {
    setFileName: PropTypes.func.isRequired
}

export default SearchForm