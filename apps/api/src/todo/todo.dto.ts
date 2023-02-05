import { Field, InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateTodoInput {
  @Field(type => String)
  title: string

  @Field(type => String, { nullable: true })
  description?: string

  @Field(type => Boolean, { nullable: true })
  completed?: boolean
}

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {}
