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

const UserDashboard = () => {
    const navigate = useNavigate()

    const userName = '상용'

    const issueStatus = [
        {
            title: '총',
            content: '5개',
            footer: '업데이트: 5분 전',
        },
        {
            title: '진행중 일감',
            content: '2개',
            footer: '업데이트: 10분 전',
        },
        {
            title: '완료된 일감',
            content: '11개',
            footer: '업데이트: 1시간 전',
        },
        {
            title: '대기중 일감',
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

    const notices = [
        {
            id: '1',
            title: '정기 점검 안내',
            description: '5월 25일 새벽 2시~4시 시스템 점검 예정',
        },
        {
            id: '2',
            title: '신규 기능 안내',
            description: '지도 기반 검색 기능이 추가되었습니다.',
        },
    ]

    const chartData = [{ 진행중: 5, 완료: 8, 대기: 3 }]

    const handleIssueAll = () => {
        navigate('/issues')
    }

    const handleNoticeAll = () => {
        navigate('/notice')
    }

    return (
        <DashboardWrapper>
            <TopSummary>
                <TopHeaderRow>
                    <GreetingSection>
                        <span>안녕하세요, {userName}님</span>
                        <h1>사용자 대시보드</h1>
                    </GreetingSection>
                    <ActionsSection>
                        <Input />
                        <AButton>새 일감 등록</AButton>
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
                        <h2>최근 등록한 일감 목록</h2>
                        <ViewAllButton onClick={handleIssueAll}>
                            모두 보기
                        </ViewAllButton>
                    </SectionHeader>
                    <TaskList tasks={issues} />
                </div>
                <div style={{ flex: 3 }}>
                    <h2>진행 상태 통계</h2>
                    <StatisticsChart data={chartData} />
                    <SectionHeader>
                        <h2>공지사항</h2>
                        <ViewAllButton onClick={handleNoticeAll}>
                            모두 보기
                        </ViewAllButton>
                    </SectionHeader>
                    <TaskList tasks={notices} variant="notice" />
                </div>
            </MainContent>
        </DashboardWrapper>
    )
}

export default UserDashboard
