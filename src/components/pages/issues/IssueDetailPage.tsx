import React from 'react'
import { IssueDetailProps } from 'types/issueDetail.type'
import CommentItemWithReply from './CommentItemWithReply'
import AButton from 'components/elements/button/Button'
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
} from './issueDetail.styles'

const IssueDetailPage = ({ issue, onClose, isOpen }: IssueDetailProps) => {
    if (!issue || !isOpen) return null

    return (
        <PanelContainer>
            <TopWrapper>
                <CloseButton onClick={onClose} aria-label="닫기">
                    ×
                </CloseButton>
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

            <Description>{issue.description}</Description>

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
