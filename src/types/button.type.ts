import { ReactNode } from 'react'

export interface ButtonPropsType {
    type?: 'button' | 'submit'
    children?: ReactNode
    disabled?: boolean
    mr?: string
    width?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
