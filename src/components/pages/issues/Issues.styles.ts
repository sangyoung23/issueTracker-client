import styled from '@emotion/styled'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
    overflow: hidden;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        padding: 16px;
    }
`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }
`

export const FilterGroup = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 8px;
    }
`

export const CreateButton = styled.button`
    background-color: #ff9500;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4338ca;
    }

    @media (max-width: 768px) {
        width: 100%;
        font-size: 13px;
    }
`

export const TaskListWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 8px;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`

export const LoadMoreButton = styled.button`
    margin: 16px auto;
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    color: #333;
    cursor: pointer;
    display: block;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f1f3f5;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SlidePanel = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 100;
    padding: 24px;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 100%;
        padding: 16px;
    }
`
