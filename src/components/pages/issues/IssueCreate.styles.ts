import styled from '@emotion/styled'

export const Container = styled.div`
    max-width: 800px;
    margin: 40px auto;
    padding: 32px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background-color: #fff;
`

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 24px;
`

export const FormGroup = styled.div`
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 6px;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    resize: vertical;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const Button = styled.button<{ variant?: 'primary' | 'default' }>`
    padding: 10px 18px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${({ variant }) =>
        variant === 'primary' ? '#1976d2' : '#eee'};
    color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#000')};
    border: none;
    &:hover {
        opacity: 0.9;
    }
`

export const UploadLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #1976d2;
    cursor: pointer;
    margin-bottom: 10px;
    svg {
        font-size: 18px;
    }
`

export const ImagePreviewWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
`

export const PreviewImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
`
