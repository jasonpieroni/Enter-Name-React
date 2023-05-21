import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Welcome ${name}!`)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  const handleNumberSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks for entering your number ${name}`)
  }

const handleNumberChange = (e) => {
  setNumber(e.target.value)
}

  return (
    <div className="App">
      <h1>Enter Information Below</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' id='name' placeholder='Lebron James' value={name} onChange={handleChange}></input>
      <button type='submit'>Submit</button>
      </form>
      <br></br>
      <br></br>
      <form onSubmit={handleNumberSubmit}>
      <label htmlFor='number'>Enter Phone Number:</label>
      <input type='text' name='number' id='number' placeholder='401-867-5309' value={number} onChange={handleNumberChange}></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
