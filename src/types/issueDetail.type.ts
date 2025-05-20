import { Task } from 'types/issueTaskList.type'

export interface IssueDetailProps {
    issue: Task | null
    onClose: () => void
    isOpen: boolean
}
