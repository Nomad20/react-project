import React from 'react'

interface BoxProps {
  tag: string,
  title: string,
}

const Box: React.FC<BoxProps> = ({ tag, title }) => {
  return (
    <div>
      <div className="box-tag">{tag}</div>
      <h2>{title}</h2>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time to read: 5 minutes</p>
    </div>
  )
}

export default Box