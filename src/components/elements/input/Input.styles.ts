import styled from '@emotion/styled'

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
`

export const StyledInput = styled.input<{ hasError?: boolean }>`
    height: 38px;
    padding: 0 12px;
    border: 1px solid ${({ hasError }) => (hasError ? '#f44336' : '#ccc')};
    border-radius: 10px;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;

    display: inline-flex;
    align-items: center;

    &:focus {
        border-color: ${({ hasError }) => (hasError ? '#f44336' : '#4a5cff')};
        box-shadow: 0 0 0 2px rgba(74, 92, 255, 0.1);
    }
`

export const ErrorText = styled.span`
    color: #f44336;
    font-size: 12px;
    margin-top: 4px;
`
