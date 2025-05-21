import React, { useState } from 'react'
import { IssueDetailProps } from 'types/issueDetail.type'
import CommentItemWithReply from './CommentItemWithReply'
import AButton from 'components/elements/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import {
    PanelContainer,
    CloseButton,
    TopWrapper,
    Title,
    StatusBadge,
    StatusIcon,
    InfoSection,
    InfoRow,
    Description,
    CommentSection,
    CommentInput,
    CommentInputWrapper,
    CommentList,
    IssueImageWrapper,
    StyledUploadLabel,
    AttachedFileSection,
    SectionTitle,
    Divider,
} from './issueDetail.styles'

const IssueDetailPage = ({ issue, onClose, isOpen }: IssueDetailProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([])

    if (!issue || !isOpen) return null

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        const filesArray = Array.from(e.target.files)

        const urls = filesArray.map(file => URL.createObjectURL(file))
        setImageUrls(urls)
    }

    return (
        <PanelContainer>
            <TopWrapper>
                <CloseButton onClick={onClose} aria-label="닫기">
                    ×
                </CloseButton>
                <StyledUploadLabel htmlFor="image-upload">
                    <FontAwesomeIcon icon={faImage} />
                    <span>사진 첨부</span>
                </StyledUploadLabel>
                <input
                    id="image-upload"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />
            </TopWrapper>

            <InfoSection>
                <InfoRow>
                    <Title>{issue.title}</Title>
                </InfoRow>
                <InfoRow>
                    <StatusBadge status={issue.status}>
                        <StatusIcon status={issue.status} />
                        {issue.status}
                    </StatusBadge>
                </InfoRow>
                <InfoRow>작성자: {issue.author}</InfoRow>
                <InfoRow>등록일: {issue.createdAt}</InfoRow>
            </InfoSection>

            <SectionTitle>설명</SectionTitle>
            <Description>{issue.description}</Description>

            {imageUrls.length > 0 && (
                <AttachedFileSection>
                    <SectionTitle>파일</SectionTitle>
                    <Divider />
                    <IssueImageWrapper>
                        {imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`첨부 이미지 ${index + 1}`}
                            />
                        ))}
                    </IssueImageWrapper>
                </AttachedFileSection>
            )}

            <CommentSection>
                <h3>댓글</h3>
                <CommentInputWrapper>
                    <CommentInput placeholder="댓글을 입력하세요..." />
                    <AButton width="60px">등록</AButton>
                </CommentInputWrapper>

                <CommentList>
                    <CommentItemWithReply
                        author="홍길동"
                        date="2025.05.20"
                        text="이 이슈에 대해 확인했습니다!"
                    />
                    <CommentItemWithReply
                        author="김철수"
                        date="2025.05.19"
                        text="수정이 필요할 것 같아요."
                    />
                </CommentList>
            </CommentSection>
        </PanelContainer>
    )
}

export default IssueDetailPage
