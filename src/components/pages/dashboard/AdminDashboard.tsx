import React from 'react'
import Card from 'components/elements/card/Card'
import { motion } from 'framer-motion'
import {
    DashboardWrapper,
    TopSummary,
    TopHeaderRow,
    GreetingSection,
    ActionsSection,
    CardRow,
    MainContent,
    SectionHeader,
    ViewAllButton,
} from './AdminDashboard.styles'
import AButton from 'components/elements/button/Button'
import Input from 'components/elements/input/Input'
import TaskList from '../taskList/TaskList'
import StatisticsChart from 'components/elements/chart/StatisticsChart'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()

    const userName = '상용'

    const issueStatus = [
        {
            title: '진행 중인 일감',
            content: '5개',
            footer: '업데이트: 5분 전',
        },
        {
            title: '완료된 일감',
            content: '2개',
            footer: '업데이트: 10분 전',
        },
        {
            title: '내가 담당한 일감',
            content: '11개',
            footer: '업데이트: 1시간 전',
        },
        {
            title: '총 일감 수',
            content: '18개',
            footer: '업데이트: 30분 전',
        },
    ]

    // TODO : 최근 이슈 5개 정도 일부만 불러오기
    const issues = [
        {
            id: '1',
            title: '매물 등록 수정',
            description: 'Login page returns 500 error',
            status: '진행중',
        },
        {
            id: '2',
            title: '맵 검색 수정',
            description: 'Add new banner image',
            status: '대기',
        },
        {
            id: '3',
            title: '매물 관리 레이아웃 수정',
            description: 'Check code quality and merge',
            status: '완료',
        },
        {
            id: '4',
            title: '매물',
            description: 'Check code quality and merge',
            status: '대기',
        },
        {
            id: '5',
            title: '매물 관리',
            description: 'Check code quality and merge',
            status: '진행중',
        },
        {
            id: '6',
            title: '레이아웃 수정',
            description: 'Check code quality and merge',
            status: '완료',
        },
        {
            id: '7',
            title: '등록 에러',
            description: 'Check code quality and merge',
            status: '완료',
        },
        {
            id: '8',
            title: '수정 에러',
            description: 'Check code quality and merge',
            status: '진행중',
        },
    ]

    // TODO : 최근 프로젝트 1~4개 정도 일부만 불러오기
    const projects = [
        {
            id: '1',
            title: '방도리',
            description: 'Login page returns 500 error',
        },
        {
            id: '2',
            title: '방구도리',
            description: 'Add new banner image',
        },
        {
            id: '3',
            title: '방두리',
            description: 'Check code quality and merge',
        },
    ]

    const chartData = [{ 진행중: 5, 완료: 8, 대기: 3 }]

    const createIssue = () => {
        navigate('/issueCreate')
    }

    return (
        <DashboardWrapper>
            <TopSummary>
                <TopHeaderRow>
                    <GreetingSection>
                        <span>안녕하세요, {userName}님</span>
                        <h1>개발자 대시보드</h1>
                    </GreetingSection>
                    <ActionsSection>
                        <Input />
                        <AButton onClick={createIssue}>새 일감 등록</AButton>
                    </ActionsSection>
                </TopHeaderRow>

                <CardRow>
                    {issueStatus.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <Card
                                title={card.title}
                                content={card.content}
                                footer={card.footer}
                                width="250px"
                                height="120px"
                            />
                        </motion.div>
                    ))}
                </CardRow>
            </TopSummary>

            <MainContent>
                <div style={{ flex: 2 }}>
                    <SectionHeader>
                        <h2>최근 일감 목록</h2>
                        <ViewAllButton>모두 보기</ViewAllButton>
                    </SectionHeader>
                    <TaskList tasks={issues} />
                </div>
                <div style={{ flex: 3 }}>
                    <h2>진행 상태 통계</h2>
                    <StatisticsChart data={chartData} />
                    <SectionHeader>
                        <h2>최근 프로젝트 목록</h2>
                        <ViewAllButton>모두 보기</ViewAllButton>
                    </SectionHeader>
                    <TaskList tasks={projects} />
                </div>
            </MainContent>
        </DashboardWrapper>
    )
}

export default AdminDashboard
