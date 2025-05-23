export interface SelectObjectType {
    text: string
    value: string
}

export interface SelectorProps {
    options: SelectObjectType[]
    onChange?: (option: SelectObjectType) => void
    placeholder?: string
    value?: string
}
