import styled from '@emotion/styled'

export const PanelContainer = styled.div`
    background: #fefefe;
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
    border-radius: 20px 0 0 20px;
    overflow-y: auto;

    @media (max-width: 768px) {
        border-radius: 0;
    }
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #e5e5e5;

    @media (max-width: 768px) {
        padding: 12px 16px;
    }
`

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #888;
    transition: color 0.2s ease;

    &:hover {
        color: #444;
    }
`

export const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: #888;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }
`

export const StatusBadge = styled.div<{ status: string }>`
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${({ status }) =>
        status === '완료'
            ? '#22c55e'
            : status === '진행중'
            ? '#facc15'
            : '#9ca3af'};
`

export const StatusIcon = styled.span<{ status: string }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ status }) =>
        status === '완료'
            ? '#15803d'
            : status === '진행중'
            ? '#ca8a04'
            : '#6b7280'};
`

export const Description = styled.div`
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    white-space: pre-wrap;
    flex-grow: 1;
    padding: 0 24px 24px 24px;
    margin-bottom: 50px;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 0 16px 20px 16px;
    }
`

export const StyledUploadLabel = styled.label`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    font-size: 14px;
    background-color: #f0f0f0;
    border-radius: 6px;
    cursor: pointer;
    color: #1976d2;
    transition: background 0.2s;

    &:hover {
        background-color: #e0e0e0;
    }

    svg {
        font-size: 16px;
    }
`

export const AttachedFileSection = styled.div`
    margin: 32px 0;

    @media (max-width: 768px) {
        margin: 24px 0;
    }
`

export const SectionTitle = styled.div`
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 12px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1f2937;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 8px;
    }
`

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #ddd;
    margin: 16px;
`

export const IssueImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
    margin-left: 15px;
    gap: 10px;

    img {
        width: 200px;
        height: 70px;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

        @media (max-width: 480px) {
            width: 100px;
            height: 50px;
        }
    }
`

export const CommentSection = styled.div`
    margin-top: 32px;
    padding: 32px;
    border-top: 1px solid #eee;
    background-color: #fafafa;

    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const CommentInputWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    width: 100%;
    margin-top: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`

export const CommentInput = styled.textarea`
    flex: 1;
    min-height: 60px;
    padding: 12px 14px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 0.95rem;
    resize: vertical;
    line-height: 1.4;
    transition: box-shadow 0.2s;

    &::placeholder {
        color: #bbb;
    }

    &:focus {
        outline: none;
        border-color: #ccc;
        box-shadow: 0 0 0 2px rgba(62, 207, 142, 0.2);
    }
`

export const CommentList = styled.div`
    margin-top: 20px;
    max-height: 200px;
    overflow-y: auto;
    padding-right: 4px;
`

export const CommentItem = styled.div`
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f3f3;
`

export const CommentAuthor = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 0.95rem;
    margin-bottom: 10px;

    .date {
        font-weight: normal;
        font-size: 0.85rem;
        color: #aaa;
        margin-top: 12px;
    }
`

export const CommentText = styled.div`
    font-size: 0.95rem;
    margin-bottom: 7px;
    color: #374151;
`

export const ReplyWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
    width: 100%;
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid #eee;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 0;
        border-left: none;
        border-top: 1px solid #eee;
        padding-top: 1rem;
    }
`

export const CommentActions = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 18px 0;
    font-size: 0.85rem;
    color: #555;

    .action-button {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        transition: color 0.2s ease;

        svg {
            transition: color 0.2s ease;
        }

        &.like:hover svg {
            color: #ec4899;
        }

        &.reply:hover {
            color: #2563eb;
        }
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 12px;
    }
`
