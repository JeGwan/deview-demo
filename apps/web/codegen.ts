import path from 'path'

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: path.resolve(__dirname, '../api/src/schema.gql'),
  documents: './pages/**/*.tsx',
  ignoreNoDocuments: true,
  generates: {
    './lib/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
