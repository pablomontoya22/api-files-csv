import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'

const CustomTable = prop => {
    const { lines } = prop
    const titles = Object.keys(lines[0])
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            { titles.map(field => { return <th key={field}>{field}</th> }) }
          </tr>
        </thead>
        <tbody>
        {
          lines.map((line, index) => {
            return (
              <tr key={index}>
                {
                  titles.map(field => { return <td key={`${index}-${field}`}>{ line[field] }</td> })
                }
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    )
}

CustomTable.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default CustomTable