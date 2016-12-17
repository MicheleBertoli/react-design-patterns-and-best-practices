import React from 'react'
import List from './list'

const Posts = {
  fetch() {
    return new Promise(resolve => resolve([{ id: 1, title: 'title', excerpt: 'excerpt' }]))
  },
}

class PostList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    Posts.fetch().then(posts => {
      this.setState({ posts })
    })
  }

  render() {
    return (
      <List collection={this.state.posts} textKey="excerpt" titleKey="title" />
    )
  }

}

export default PostList
