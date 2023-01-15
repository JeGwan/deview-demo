import { Request, Response } from 'express'
import graphiqlPage from 'src/graphql/graphiql/graphiql.page'

export interface GraphiQLMiddlewareOptions {
  path: string
}

const GraphiQLMiddleware = (options: GraphiQLMiddlewareOptions) => {
  return (req: Request, res: Response) => {
    const { path } = options
    res.write(graphiqlPage({ endpointUrl: `http://${req.get('host')}${path}` }))
    res.end()
  }
}

export default GraphiQLMiddleware
