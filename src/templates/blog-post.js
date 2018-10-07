import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default class Template extends React.Component {
  componentDidMount() {
    injectDisqus()
  }
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <div className="blog-post-container">
          <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div id="disqus_thread" />
          </div>
        </div>
      </Layout>
    )
  }
}

function injectDisqus() {
  var d = document,
    s = d.createElement('script')
  s.src = 'https://gladis-me.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date())
  ;(d.head || d.body).appendChild(s)
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
