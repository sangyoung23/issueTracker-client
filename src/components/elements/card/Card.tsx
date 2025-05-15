import React from 'react'
import { CardContainer, CardHeader, CardBody, CardFooter } from './Card.styles'
import { CardProps } from 'types/card.type'

const Card: React.FC<CardProps> = ({
    title,
    children,
    footer,
    width,
    height,
}) => {
    return (
        <CardContainer width={width} height={height}>
            {title && <CardHeader>{title}</CardHeader>}
            <CardBody>{children}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
        </CardContainer>
    )
}

export default Card
