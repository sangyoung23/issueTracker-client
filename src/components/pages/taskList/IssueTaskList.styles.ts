import styled from '@emotion/styled'

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 0.1);
    padding: 16px;
`

export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr 2fr 4fr 1.2fr;
    font-weight: 700;
    padding: 12px 16px;
    border-bottom: 2px solid #ddd;
    color: #333;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr 2fr 4fr 1.2fr;
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
    }
`

export const Cell = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
