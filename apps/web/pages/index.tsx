import { initializeApollo } from '../lib/apollo'

const Index = () => {
  return <h1>helllo</h1>
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
