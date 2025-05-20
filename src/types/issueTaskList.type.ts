export interface Task {
    id: string
    author: string
    status: string
    title: string
    description: string
    createdAt: string
}

export interface IssueTaskListProps {
    tasks: Task[]
    onTaskClick?: (id: string) => void
}
