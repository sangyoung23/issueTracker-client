import React from 'react'
import {
    InputWrapper,
    StyledLabel,
    StyledInput,
    ErrorText,
} from './Input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    id,
    placeholder = '검색어를 입력 해주세요.',
}) => {
    return (
        <InputWrapper>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
            <StyledInput placeholder={placeholder} id={id} hasError={!!error} />
            {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>
    )
}

export default Input
