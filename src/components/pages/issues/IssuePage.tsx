import React, { useState } from 'react'
import {
    PageWrapper,
    TopBar,
    FilterGroup,
    CreateButton,
    TaskListWrapper,
    LoadMoreButton,
    SlidePanel,
} from './Issues.styles'
import TaskList from '../taskList/TaskList'

type Task = {
    id: number
    title: string
    description: string
}

const IssuePage = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const handleCreate = () => {
        console.log('등록 버튼 클릭')
    }

    const handleLoadMore = () => {
        console.log('더보기 클릭')
    }

    const handleTaskClick = (taskId: number) => {
        console.log(`일감 ${taskId} 클릭`)
        setIsPanelOpen(true)
    }

    const closePanel = () => setIsPanelOpen(false)

    const issues = [
        {
            id: '1',
            title: '회원가입 API 에러 수정',
            description:
                'POST /api/signup 요청 시 500 오류 발생. 원인 분석 및 수정 필요.',
        },
        {
            id: '2',
            title: '대시보드 통계값 오류',
            description:
                '접속자 수 통계가 비정상적으로 표시됨. 쿼리 확인 필요.',
        },
        {
            id: '3',
            title: '프로젝트 목록 필터 추가',
            description: '진행 중 / 완료 구분 필터 기능 구현 요청됨.',
        },
        {
            id: '4',
            title: '모바일 UI 깨짐 현상',
            description:
                'iOS Safari에서 버튼 정렬이 깨지는 문제 발생. CSS 수정 필요.',
        },
        {
            id: '5',
            title: '알림 기능 개선',
            description:
                '읽지 않은 알림이 상단에 우선 표시되도록 정렬 방식 변경 요청.',
        },
    ]

    return (
        <PageWrapper>
            <TopBar>
                <FilterGroup>
                    <span>필터 1</span>
                    <span>필터 2</span>
                </FilterGroup>

                <CreateButton onClick={handleCreate}>등록</CreateButton>
            </TopBar>

            {/* TaskList에 헤더, 필드 명시적으로 넘기기 */}
            <TaskList tasks={issues} />

            <TaskListWrapper>
                {tasks.map(task => (
                    <div
                        key={task.id}
                        onClick={() => handleTaskClick(task.id)}
                        style={{
                            padding: '16px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            marginBottom: '12px',
                            cursor: 'pointer',
                        }}
                    >
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                ))}

                <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
            </TaskListWrapper>

            <SlidePanel isOpen={isPanelOpen}>
                <button onClick={closePanel} style={{ marginBottom: '16px' }}>
                    닫기
                </button>
                <h3>일감 상세 보기</h3>
            </SlidePanel>
        </PageWrapper>
    )
}

export default IssuePage
