import { Field, Int, ObjectType } from '@nestjs/graphql'
import { GraphQLDateTime } from 'graphql-scalars'

@ObjectType()
export class Todo {
  @Field(type => Int)
  id: number

  @Field(type => String)
  title: string

  @Field(type => String, { nullable: true })
  description?: string

  @Field(type => Boolean)
  completed: boolean

  @Field(type => GraphQLDateTime)
  createdDateTime: Date
}
