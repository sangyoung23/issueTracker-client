import styled from '@emotion/styled'

// 전체 페이지 컨테이너
export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
    overflow: hidden;
    background-color: #f8f9fa;
`

// 상단 필터 + 등록 버튼 영역
export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

// 필터 바 (왼쪽)
export const FilterGroup = styled.div`
    display: flex;
    gap: 12px;
`

// 등록 버튼 (오른쪽)
export const CreateButton = styled.button`
    background-color: #4f46e5;
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
`

// Task 리스트 영역 (스크롤 가능하게)
export const TaskListWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 8px;
`

// 더 보기 버튼
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
`

// 슬라이드 상세 보기 패널
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
`
