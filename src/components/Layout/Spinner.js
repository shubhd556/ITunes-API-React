import spinner from './spinner.gif';
import React from 'react'

function Spinner() {
    return (
        <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
    )
}

export default Spinner
