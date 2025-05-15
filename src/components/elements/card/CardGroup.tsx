import React from 'react'
import { CardGroupWrapper } from './Card.styles'

interface CardGroupProps {
    children: React.ReactNode
}

const CardGroup: React.FC<CardGroupProps> = ({ children }) => {
    return <CardGroupWrapper>{children}</CardGroupWrapper>
}

export default CardGroup
