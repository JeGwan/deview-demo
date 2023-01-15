import { PHASE } from 'utils'

const defaultQuery = `
query IntrospectionQuery {
  __schema {
    types {
      name
    }
  }
}
`

export interface GraphiQLPageOptions {
  endpointUrl: string
}

export default function graphiqlPage(options: GraphiQLPageOptions) {
  const { endpointUrl } = options
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }

      #graphiql {
        height: 100vh;
      }
    </style>
    <title>GraphiQL 🤟 - ${PHASE}</title>
    <link rel="icon" type="image/x-icon" href="https://graphql.org/img/logo.svg">
    <link rel="stylesheet" href="https://unpkg.com/graphiql/graphiql.min.css" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@graphiql/plugin-explorer/dist/style.css"
    />
  </head>

  <body>
    <div id="graphiql">Loading...</div>

    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>

    <script
      crossorigin
      src="https://unpkg.com/graphiql/graphiql.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/@graphiql/plugin-explorer/dist/graphiql-plugin-explorer.umd.js"
    ></script>

    <script>
      var fetcher = GraphiQL.createFetcher({
        url: '${endpointUrl}',
      });

      function GraphiQLWithExplorer() {
        var [query, setQuery] = React.useState(
          \`${defaultQuery}\`,
        );
        var explorerPlugin = GraphiQLPluginExplorer.useExplorerPlugin({
          query: query,
          onEdit: setQuery,
        });
        return React.createElement(GraphiQL, {
          fetcher: fetcher,
          defaultEditorToolsVisibility: true,
          plugins: [explorerPlugin],
          query: query,
          onEditQuery: setQuery,
        });
      }

      ReactDOM.render(
        React.createElement(GraphiQLWithExplorer),
        document.getElementById('graphiql'),
      );
    </script>
  </body>
</html>
`
}
