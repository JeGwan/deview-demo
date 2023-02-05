import React, { InputHTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...rest }: Props) => {
  return <input className={classNames(styles.input, className)} {...rest} />
}

export default Input
