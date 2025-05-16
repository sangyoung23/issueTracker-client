import React from 'react'
import { CardContainer, CardHeader, CardBody, CardFooter } from './Card.styles'
import { CardProps } from 'types/card.type'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Card: React.FC<CardProps> = ({
    title,
    content,
    footer,
    width,
    height,
}) => {
    return (
        <CardContainer width={width} height={height}>
            {title && <CardHeader>{title}</CardHeader>}
            <CardBody>{content}</CardBody>
            {footer && (
                <CardFooter>
                    <FontAwesomeIcon
                        icon={faClock}
                        style={{ marginRight: '6px', color: '#999' }}
                    />
                    {footer}
                </CardFooter>
            )}
        </CardContainer>
    )
}

export default Card
