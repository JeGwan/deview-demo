import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number

  @Field(type => Int)
  userId: number

  @Field(type => String)
  title: string

  @Field(type => String)
  body: string
}
