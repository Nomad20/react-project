import React from 'react'

const MiniProfile: React.FC = () => {
  return (
    <div>
      <img src="profile-image.jpg" alt="User Profile" />
      <div>
        <h3>Username: JohnDoe</h3>
        <p>Email: john.doe@example.com</p>
        <button>My Account</button>
        <button>Sign Out</button>
      </div>
    </div>
  )
}

export default MiniProfile