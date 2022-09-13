import React from 'react'

const SectionHead = ({icon, title, className}) => {
  return (
    <div className={`sectin_head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead