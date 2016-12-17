import React from 'react'
import { connect } from 'react-refetch'
import Gist from './gist'

const List = ({ gists }) => (
  gists.fulfilled && (
    <ul>
      {gists.value.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </ul>
  )
)

List.propTypes = {
  gists: React.PropTypes.object,
}

const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}))

export default connectWithGists(List)
