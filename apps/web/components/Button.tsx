import React, { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './Button.module.scss'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
