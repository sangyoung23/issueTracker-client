import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
`

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Badge = styled.span<{ status: string }>`
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    background-color: ${({ status }) =>
        status === '완료'
            ? '#28a745'
            : status === '진행중'
            ? '#007bff'
            : '#6c757d'};
`

const Meta = styled.div`
    margin-top: 4px;
    font-size: 13px;
    color: #555;
`

const ProgressBar = styled.div<{ percent: number }>`
    background: #eee;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    margin-top: 12px;

    &::before {
        content: '';
        display: block;
        height: 100%;
        width: ${({ percent }) => percent}%;
        background-color: #28a745;
        transition: width 0.3s;
    }
`

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <Card>
            <TitleRow>
                <h3>{project.name}</h3>
                <Badge status={project.status}>{project.status}</Badge>
            </TitleRow>
            <Meta>
                작성자: {project.createdBy} | 생성일: {project.createdAt}
            </Meta>

            <p style={{ marginTop: '12px' }}>{project.description}</p>

            <div style={{ marginTop: '12px' }}>
                👥 참여자: {project.members.join(', ')}
            </div>

            <ProgressBar percent={project.progress} />
            <div style={{ marginTop: '4px', fontSize: '13px' }}>
                {project.progress}% 완료
            </div>

            <div style={{ marginTop: '12px' }}>
                📝 이슈 {project.issues.length}건 | 📎 첨부{' '}
                {project.files.length}건
            </div>
        </Card>
    )
}

export default ProjectCard
