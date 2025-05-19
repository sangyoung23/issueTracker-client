export interface Task {
    id: number
    title: string
    description: string
    status?: string
}

export interface TaskListProps {
    tasks: Task[]
    maxVisible?: number
}
