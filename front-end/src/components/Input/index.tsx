import { InputLabel, TextField } from '@material-ui/core'
import { useState } from 'react'
import { useStyles } from './styles'

type InputProps = {
  id?: any
  label?: string
  initValue?: string
  disabled?: boolean
  tableInput?: boolean
  onChange: (value: string) => void
}

export const Input = ({ id = '', label = '', initValue = '', onChange, disabled, tableInput }: InputProps) => {
  const [value, setValue] = useState(initValue)
  const classes = useStyles()

  return (
    <span className={tableInput ? classes.inputContainerTable : classes.inputContainer}>
      <InputLabel>{label}</InputLabel>
      <TextField
        id={id}
        fullWidth
        value={value}
        disabled={disabled ? disabled : false}
        onChange={(event) => setValue(event.target.value)}
        onBlur={(event) => {
          onChange(event.target.value)
        }}
      />
    </span>
  )
}
