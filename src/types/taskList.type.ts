export interface Task {
    id: string
    title: string
    description: string
    status?: string
}

export interface TaskListProps {
    tasks: Task[]
    maxVisible?: number
}

export interface TaskCardProps {
    variant?: 'default' | 'notice'
}

export interface ExtendedTaskListProps extends TaskListProps {
    variant?: 'default' | 'notice'
}
