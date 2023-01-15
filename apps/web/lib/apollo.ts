import { IncomingMessage, ServerResponse } from 'http'

import { useMemo } from 'react'

import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { IS_BROWSER, IS_DEV } from 'utils'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext = {}) {
  const { HttpLink } = require('@apollo/client')

  return new HttpLink({
    uri: 'http://localhost:4000/graphql',
    ...(IS_BROWSER ? { credentials: 'include' } : { headers: { cookie: context.req?.headers?.cookie } }),
  })
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
    connectToDevTools: IS_DEV,
  })
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext,
) {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
