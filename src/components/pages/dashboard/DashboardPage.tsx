// ✅ 타입 선언

import { useState } from 'react'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'

const DashboardPage = () => {
    // TODO 로그인 시 api response에 담긴 권한으로 설정하기
    const [userRole, setUserRole] = useState('admin')

    // ✅ 훅 사용 (Alert 등)

    // ✅ 사이드 이펙트 (useEffect 등)

    // ✅ 함수

    return <>{userRole === 'admin' ? <AdminDashboard /> : <UserDashboard />}</>
}

export default DashboardPage
