import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { TaskCardProps } from 'types/taskList.type'

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const TaskCard = styled(motion.div)<TaskCardProps>`
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    transition: background-color 0.3s ease;
    height: ${({ variant }) => (variant === 'notice' ? '120px' : 'auto')};

    &:hover {
        background-color: #f1f3f5;
    }
`

export const TaskInfo = styled.div<TaskCardProps>`
    display: flex;
    flex-direction: column;

    h4 {
        margin: ${({ variant }) =>
            variant === 'notice' ? '0 0 20px 0' : '0 0 4px 0'};
        font-size: 16px;
        font-weight: 600;
    }

    span {
        font-size: 14px;
        color: #666;
    }
`

export const TaskStatus = styled.div`
    font-size: 14px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: #e0e7ff;
    color: #4f46e5;
`

export const MoreCard = styled(motion.div)`
    border: 2px dashed #ff9500;
    border-radius: 12px;
    padding: 16px 20px;
    text-align: center;
    color: #555;
    cursor: pointer;
    background-color: #fff;

    &:hover {
        background-color: #f8f9fa;
    }
`
