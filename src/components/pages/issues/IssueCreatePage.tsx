import React, { useState } from 'react'
import Selector from 'components/elements/selector/Selector'
import { SelectObjectType } from 'types/selector.type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import AButton from 'components/elements/button/Button'
import {
    Container,
    Title,
    FormGroup,
    Label,
    Input,
    Textarea,
    UploadLabel,
    ImagePreviewWrapper,
    PreviewImage,
    ButtonGroup,
} from './IssueCreate.styles'

const IssueCreatePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState<SelectObjectType | null>(null)
    const [imageUrls, setImageUrls] = useState<string[]>([])

    const statusOptions: SelectObjectType[] = [
        { text: '확인', value: 'confirmed' },
        { text: '보류', value: 'pending' },
        { text: '진행중', value: 'in_progress' },
        { text: '대기', value: 'waiting' },
        { text: '완료', value: 'completed' },
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log('이슈 등록:', {
            title,
            description,
            status,
            imageUrls,
        })

        // 초기화
        setTitle('')
        setDescription('')
        setStatus(null)
        setImageUrls([])
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const filesArray = Array.from(e.target.files)
        const urls = filesArray.map(file => URL.createObjectURL(file))
        setImageUrls(prev => [...prev, ...urls])
    }

    return (
        <Container>
            <Title>🐞 이슈 등록</Title>

            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="status">상태</Label>
                    <Selector
                        options={statusOptions}
                        placeholder="상태 선택"
                        value={status?.value}
                        onChange={selected => setStatus(selected)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="title">제목 *</Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="이슈 제목을 입력하세요"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="description">설명</Label>
                    <Textarea
                        id="description"
                        placeholder="이슈에 대한 자세한 설명을 작성하세요"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <UploadLabel htmlFor="image-upload">
                        <FontAwesomeIcon icon={faImage} />
                        사진 첨부
                    </UploadLabel>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    {imageUrls.length > 0 && (
                        <ImagePreviewWrapper>
                            {imageUrls.map((url, index) => (
                                <PreviewImage
                                    key={index}
                                    src={url}
                                    alt={`이미지 ${index + 1}`}
                                />
                            ))}
                        </ImagePreviewWrapper>
                    )}
                </FormGroup>

                <ButtonGroup>
                    <AButton
                        type="button"
                        onClick={() => {
                            setTitle('')
                            setDescription('')
                            setStatus(null)
                            setImageUrls([])
                        }}
                    >
                        취소
                    </AButton>
                    <AButton width="60px" type="submit">
                        등록
                    </AButton>
                </ButtonGroup>
            </form>
        </Container>
    )
}

export default IssueCreatePage
