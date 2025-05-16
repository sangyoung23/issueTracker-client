import React from 'react'
import { ButtonPropsType } from 'types/button.type'
import { Button } from './Button.styles'

const AButton = ({
    type,
    children,
    disabled,
    mr,
    width,
    onClick,
}: ButtonPropsType) => {
    return (
        <Button
            type={type}
            width={width}
            mr={mr}
            disabled={disabled}
            onClick={event => onClick && onClick(event)}
        >
            {children}
        </Button>
    )
}

export default AButton
