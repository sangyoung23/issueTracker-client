import React from 'react'
import Card from 'components/elements/card/Card'
import CardGroup from 'components/elements/card/CardGroup'

// ✅ 타입 선언

const AdminDashboard = () => {
    // ✅ 상태 (State) 관리

    // ✅ 훅 사용 (Alert 등)

    // ✅ 사이드 이펙트 (useEffect 등)

    // ✅ 함수

    return (
        <CardGroup>
            <Card title="진행 중인 일감" footer="업데이트: 5분 전" />
            <Card title="완료된 일감" footer="업데이트: 10분 전" />
            <Card title="내가 담당한 일감" footer="업데이트: 1시간 전" />
        </CardGroup>
    )
}

export default AdminDashboard
