import styled from '@emotion/styled'
import { CardContainerProps } from 'types/cardContainer.type'

export const CardGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
`

export const CardContainer = styled.div<CardContainerProps>`
    width: ${({ width }) => width || '500px'};
    height: ${({ height }) => height || '140px'};
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 16px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
`

export const CardHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
`

export const CardBody = styled.div`
    font-size: 14px;
    color: #333;
    flex-grow: 1;
`

export const CardFooter = styled.div`
    margin-top: 12px;
    text-align: right;
    font-size: 13px;
    color: #888;
`
