import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#f15025')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          id="color-picker"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder={color}
          id="color-text-input"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
