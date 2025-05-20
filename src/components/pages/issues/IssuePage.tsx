import React, { useState } from 'react'
import {
    PageWrapper,
    TopBar,
    FilterGroup,
    CreateButton,
    TaskListWrapper,
    LoadMoreButton,
} from './Issues.styles'
import IssueTaskList from '../taskList/IssueTaskList'
import SlidePanel from 'components/elements/slidePanel/SlidePanel'
import IssueDetailPage from './IssueDetailPage'
import { Task } from 'types/issueTaskList.type'
import { issues } from './issueDummyData'

const ITEMS_PER_PAGE = 10

const IssuePage = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)

    const handleCreate = () => {
        console.log('등록 버튼 클릭')
    }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE)
    }

    const handleTaskClick = (taskId: string) => {
        const task = issues.find(t => t.id === taskId) || null
        setSelectedTask(task)
        setIsPanelOpen(true)
    }

    const closePanel = () => setIsPanelOpen(false)

    const visibleTasks = issues.slice(0, visibleCount)
    const hasMore = visibleCount < issues.length

    return (
        <PageWrapper>
            <TopBar>
                <FilterGroup>
                    <span>필터 1</span>
                    <span>필터 2</span>
                </FilterGroup>
                <CreateButton onClick={handleCreate}>등록</CreateButton>
            </TopBar>

            <IssueTaskList tasks={visibleTasks} onTaskClick={handleTaskClick} />

            <TaskListWrapper>
                {hasMore && (
                    <LoadMoreButton onClick={handleLoadMore}>
                        더보기
                    </LoadMoreButton>
                )}
            </TaskListWrapper>

            <SlidePanel isOpen={isPanelOpen} onClose={closePanel}>
                {selectedTask ? (
                    <IssueDetailPage
                        isOpen={isPanelOpen}
                        onClose={closePanel}
                        issue={selectedTask}
                    />
                ) : (
                    <p>선택된 이슈가 없습니다.</p>
                )}
            </SlidePanel>
        </PageWrapper>
    )
}

export default IssuePage
