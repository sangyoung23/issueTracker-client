import React from 'react'
import styled from '@emotion/styled'
import ProjectCard from './ProjectCard'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 16px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;
`

// 임시 데이터
const dummyProjects = [
    {
        id: 1,
        name: '부동산 관리 시스템',
        status: '진행중',
        createdBy: '상용',
        createdAt: '2025-05-01',
        description: '부동산 거래 자동화를 위한 프로젝트',
        members: ['상용(백엔드)', '정훈(프론트)'],
        progress: 60,
        issues: [
            { id: 12, title: '로그인 페이지 오류', status: '진행중' },
            { id: 15, title: '배포 자동화 작업', status: '완료' },
        ],
        files: ['요구사항정의서.docx', '디자인시안.png'],
        comments: ['상용: 로그인 버그 수정 중입니다'],
    },
    {
        id: 2,
        name: '쇼핑몰 관리자 웹앱',
        status: '완료',
        createdBy: '정훈',
        createdAt: '2025-03-15',
        description: '쇼핑몰 상품 및 주문 관리 기능 개발',
        members: ['정훈(프론트)', '영수(백엔드)'],
        progress: 100,
        issues: [{ id: 9, title: '상품 등록 오류', status: '완료' }],
        files: [],
        comments: [],
    },
]

const ProjectListPage = () => {
    return (
        <Container>
            <h1>📁 프로젝트 목록</h1>
            <Grid>
                {dummyProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Grid>
        </Container>
    )
}

export default ProjectListPage
