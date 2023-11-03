import React, { useState } from 'react'

const RegistrationFormStudent: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
    
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationFormStudent