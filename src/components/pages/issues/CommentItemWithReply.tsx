import React, { useState } from 'react'
import AButton from 'components/elements/button/Button'
import {
    CommentItem,
    CommentAuthor,
    CommentText,
    CommentInput,
    ReplyWrapper,
    CommentActions,
} from './issueDetail.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart as solidHeart,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons'

const CommentItemWithReply = ({
    author,
    date,
    text,
}: {
    author: string
    date: string
    text: string
}) => {
    const [showReplyInput, setShowReplyInput] = useState(false)
    const [replyText, setReplyText] = useState('')
    const [liked, setLiked] = useState(false)
    const replyCount = 2 // 예시 대댓글 수

    const handleReplySubmit = () => {
        if (!replyText.trim()) return
        console.log(`대댓글 작성: ${replyText}`)
        setReplyText('')
        setShowReplyInput(false)
    }

    return (
        <CommentItem>
            <CommentAuthor>
                <span>{author}</span>
                <span className="date">{date}</span>
            </CommentAuthor>

            <CommentText>{text}</CommentText>

            <CommentActions>
                {/* 좋아요 버튼 */}
                <div
                    className="action-button like"
                    onClick={() => setLiked(prev => !prev)}
                >
                    <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
                    <span>좋아요</span>
                </div>

                {/* 답글 수 */}
                <div className="action-button reply">
                    <FontAwesomeIcon icon={faCommentDots} />
                    <span>답글 {replyCount}개</span>
                </div>

                {/* 답글 토글 버튼 */}
                <div
                    className="action-button reply"
                    onClick={() => setShowReplyInput(prev => !prev)}
                >
                    <span>{showReplyInput ? '취소' : '답글'}</span>
                </div>
            </CommentActions>

            {showReplyInput && (
                <ReplyWrapper>
                    <CommentInput
                        placeholder="답글을 입력하세요..."
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        as="textarea"
                        rows={3}
                    />
                    <AButton width="60px" onClick={handleReplySubmit}>
                        등록
                    </AButton>
                </ReplyWrapper>
            )}
        </CommentItem>
    )
}

export default CommentItemWithReply
