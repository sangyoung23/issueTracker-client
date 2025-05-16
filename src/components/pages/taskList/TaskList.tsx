import React from 'react'
import {
    TaskContainer,
    TaskCard,
    TaskInfo,
    TaskStatus,
} from './TaskList.styles'

// ✅ 애니메이션 variants 정의
const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.02 },
}

const dummyTasks = [
    {
        id: 1,
        title: '매물 등록 수정',
        description: 'Login page returns 500 error',
        status: '진행중',
    },
    {
        id: 2,
        title: '맵 검색 수정',
        description: 'Add new banner image',
        status: '대기',
    },
    {
        id: 3,
        title: '매물 관리 레이아웃 수정',
        description: 'Check code quality and merge',
        status: '완료',
    },
]

const TaskList = () => {
    return (
        <TaskContainer>
            {dummyTasks.map((task, index) => (
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
                    <TaskStatus>{task.status}</TaskStatus>
                </TaskCard>
            ))}
        </TaskContainer>
    )
}

export default TaskList
