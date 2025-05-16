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
import Button from 'components/elements/button/Button'
import Input from 'components/elements/input/Input'
import TaskList from '../taskList/TaskList'
import StatisticsChart from 'components/elements/chart/StatisticsChart'

const AdminDashboard = () => {
    const userName = '상용'

    const cards = [
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

    return (
        <DashboardWrapper>
            <TopSummary>
                <TopHeaderRow>
                    <GreetingSection>
                        <span>안녕하세요, {userName}님</span>
                        <h1>대시보드</h1>
                    </GreetingSection>
                    <ActionsSection>
                        <Input />
                        <Button>새 일감 등록</Button>
                    </ActionsSection>
                </TopHeaderRow>

                <CardRow>
                    {cards.map((card, index) => (
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
                    <TaskList />
                </div>
                <div style={{ flex: 3 }}>
                    <h2>진행 상태 통계</h2>
                    <StatisticsChart />
                </div>
            </MainContent>
        </DashboardWrapper>
    )
}

export default AdminDashboard
