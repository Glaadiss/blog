import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'

const postArr = [
  {
    key: 1,
    date: '7 December 2018',
    tag: 'JavaScript',
    title: 'Do you really need this?',
    subtitle: "Stop complaining about this in JS. Just don't use it...",
    image:
      'https://cdn.pixabay.com/photo/2016/10/29/14/24/why-1780726_1280.png',
  },
  {
    key: 2,
    date: '3 December 2013',
    tag: 'JavaScript',
    title: 'Promise composition?',
    subtitle: 'What do you say for Promise.some/any etc.?',
    image:
      'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/rule-of-thirds-composition-57dfc2d64ad27__880.jpg',
  },
]

const IndexPage = () => (
  <Layout>
    {postArr.map(el => (
      <Post {...el} />
    ))}
  </Layout>
)

export default IndexPage
