import React from 'react'
import {
    TaskContainer,
    TaskCard,
    TaskInfo,
    TaskStatus,
    MoreCard,
} from './TaskList.styles'
import { TaskListProps } from 'types/taskList.type'

const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.02 },
}

const MAX_VISIBLE_TASKS = 6

const TaskList = ({ tasks }: TaskListProps) => {
    const visibleTasks = tasks.slice(0, MAX_VISIBLE_TASKS)
    const hasMore = tasks.length > MAX_VISIBLE_TASKS

    return (
        <TaskContainer>
            {visibleTasks.map((task, index) => (
                <TaskCard
                    key={task.id}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    transition={{ duration: 0.8, delay: index * 0.12 }}
                >
                    <TaskInfo>
                        <h4>{task.title}</h4>
                        <span>{task.description}</span>
                    </TaskInfo>
                    {task.status && <TaskStatus>{task.status}</TaskStatus>}
                </TaskCard>
            ))}

            {hasMore && (
                <MoreCard
                    onClick={() => alert('전체 보기 클릭')}
                    whileHover={{ scale: 1.02 }}
                >
                    + 전체 보기
                </MoreCard>
            )}
        </TaskContainer>
    )
}

export default TaskList
