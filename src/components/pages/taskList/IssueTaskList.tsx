import React from 'react'
import { ListWrapper, HeaderRow, Row, Cell } from './IssueTaskList.styles'
import { IssueTaskListProps } from 'types/issueTaskList.type'

const IssueTaskList: React.FC<IssueTaskListProps> = ({
    tasks,
    onTaskClick,
}) => {
    return (
        <ListWrapper>
            <HeaderRow>
                <Cell>이슈 번호</Cell>
                <Cell>작성자</Cell>
                <Cell>이슈 상태</Cell>
                <Cell>이슈 제목</Cell>
                <Cell>이슈 본문</Cell>
                <Cell>등록일자</Cell>
            </HeaderRow>
            {tasks.map(task => (
                <Row
                    key={task.id}
                    onClick={() => onTaskClick && onTaskClick(task.id)}
                >
                    <Cell>{task.id}</Cell>
                    <Cell>{task.author}</Cell>
                    <Cell>{task.status}</Cell>
                    <Cell>{task.title}</Cell>
                    <Cell>{task.description}</Cell>
                    <Cell>{task.createdAt}</Cell>
                </Row>
            ))}
        </ListWrapper>
    )
}

export default IssueTaskList
