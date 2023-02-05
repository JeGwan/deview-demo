import { Field, Int, ObjectType } from '@nestjs/graphql'

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
}
