import { useQuery } from '@apollo/client'

import { graphql } from 'lib/gql'

import { initializeApollo } from '../lib/apollo'

const Posts = graphql(`
  query Posts {
    posts {
      id
      userId
      title
      body
    }
  }
`)

const Index = () => {
  const { data, loading, error } = useQuery(Posts)

  if (loading) return <div>loading</div>
  if (error) return <div>error occured</div>

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
