import React, { useState } from 'react'

const MyAccount: React.FC = () => {
  const [editMode, setEditMode] = useState(false)

  const handleEditClick = () => {
    setEditMode(true)
  }

  return (
    <div>
      <h2>My Account</h2>
      {editMode ? (
        
        <form>
          
          <button>Save</button>
        </form>
      ) : (
        
        <div>
        
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
      <button>Sign Out</button>
    </div>
  )
}

export default MyAccount