import styled from '@emotion/styled'

interface InputWrapperProps {
    width?: string | number
}

export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: ${({ width }) =>
        typeof width === 'number' ? `${width}px` : width || '250px'};
`

export const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
`

export const StyledInput = styled.input`
    height: 42px;
    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;
    width: 100%;

    &:focus {
        border-color: #4a5cff;
        box-shadow: 0 0 0 2px rgba(74, 92, 255, 0.1);
    }
`
