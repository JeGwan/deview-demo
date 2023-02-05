import React from 'react'

import classNames from 'classnames'

import styles from './Checkbox.module.scss'

interface Props {
  className?: string
  checked: boolean
  onChecked?: (checked: boolean) => void
}

const Checkbox = ({ checked, onChecked, className }: Props) => {
  const handleChange = () => {
    onChecked?.(!checked)
  }

  return (
    <label className={className}>
      <input className={styles.input} type="checkbox" checked={checked} onChange={handleChange} />
      <span className={classNames(styles.checkbox, { [styles.checked]: checked })} />
    </label>
  )
}

export default Checkbox
