import React, { useState } from 'react'

const Header = () => {
  const [name, setName] = useState('')
  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <header>
      <h1>{name || 'React Developer Webpage'}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </header>
  )
}

export default Header
