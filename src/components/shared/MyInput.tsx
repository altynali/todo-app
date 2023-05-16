import { FormControl, FormHelperText, InputLabel, TextField } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

export type InputProps = {
    helperText?: string
    className?: string
    variant?: 'outlined' | 'filled' | 'standard' | undefined
    label?: string
    value: unknown
    onChange: Dispatch<SetStateAction<string>>
    required?: boolean
    type?: string
}

export const MyInput: FC<InputProps> = ({
    helperText,
    label,
    value,
    onChange,
    variant = 'outlined',
    className,
    required,
    type,
}) => {
    return (
        <div className={className}>
            <FormControl>
                <TextField
                    required={required}
                    label={label}
                    variant={variant}
                    aria-describedby="my-helper-text"
                    value={value}
                    onChange={(event: ChangeEvent) => onChange((event.target as HTMLTextAreaElement).value)}
                    type={type}
                />
                <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}
