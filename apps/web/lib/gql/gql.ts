/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Todos {\n    todos {\n      id\n      title\n      description\n      completed\n      createdDateTime\n    }\n  }\n": types.TodosDocument,
};

export function graphql(source: "\n  query Todos {\n    todos {\n      id\n      title\n      description\n      completed\n      createdDateTime\n    }\n  }\n"): (typeof documents)["\n  query Todos {\n    todos {\n      id\n      title\n      description\n      completed\n      createdDateTime\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;