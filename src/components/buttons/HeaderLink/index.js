import React from 'react'
import { Link } from 'gatsby'

const HeaderLink = ({ title, to }) => {
  return (
    <Link
      to={to}
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {title}
    </Link>
  )
}

export default HeaderLink
