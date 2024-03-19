import React, { useState } from 'react'

const Addremove = () => {
    const [value, setValue] = useState(0)

    const addValue = () => {
        setValue(value+1)
    }

    const removeValue = () => {
        setValue(value-1)
    }

  return (
      <div>
          <p>Increment and Decrement {value}</p>
          <button onClick={addValue}>Add Value</button>
          <button onClick={removeValue}>Remove Value </button>
    </div>
  )
}

export default Addremove;