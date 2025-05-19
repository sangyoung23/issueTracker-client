import React from 'react'
import { InputWrapper, StyledLabel, StyledInput } from './Input.styles'
import { InputProps } from 'types/input.type'

const Input: React.FC<InputProps> = ({
    label,
    id,
    placeholder = '검색어를 입력 해주세요.',
    width,
}) => {
    return (
        <InputWrapper width={width}>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
            <StyledInput placeholder={placeholder} id={id} />
        </InputWrapper>
    )
}

export default Input
