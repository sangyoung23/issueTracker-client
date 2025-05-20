import styled from '@emotion/styled'

export const Button = styled.button<{
    btnType?: string
    mr?: string
    width?: string
}>`
    padding: 6px 12px;
    background-color: #3ecf8e;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.8rem;
    height: 38px;
    cursor: pointer;
    white-space: nowrap;

    width: ${props => props.width || '90px'};
    margin-right: ${props => props.mr || '0px'};

    &:hover {
        background-color: #32b77c;
    }
`
