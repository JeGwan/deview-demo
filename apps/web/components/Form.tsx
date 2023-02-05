import React, { useState } from 'react'

import { useMutation } from '@apollo/client'

import { graphql } from 'lib/gql'

import Button from './Button'
import styles from './Form.module.scss'
import Input from './Input'

const CreateTodo = graphql(`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
      completed
      createdDateTime
    }
  }
`)

interface Props {
  onCreated?: () => void
}

const Form = ({ onCreated }: Props) => {
  const [createTodo] = useMutation(CreateTodo)

  const [title, setTitle] = useState('')

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.target.value)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    const { data } = await createTodo({
      variables: {
        input: {
          title,
        },
      },
    })

    if (data?.createTodo) {
      setTitle('')
      onCreated?.()
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input className={styles.input} value={title} onChange={handleTitleChange} />
      <Button>추가하기</Button>
    </form>
  )
}

export default Form
