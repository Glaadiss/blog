import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Recent posts:</h1>
    <Link to="/posts/another-one">First one</Link>
    <br />
    <Link to="/posts/another-one">Another one</Link>
  </Layout>
)

export default IndexPage
