import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from 'components/pages/login/LoginPage'
import DashboardPage from 'components/pages/dashboard/DashboardPage'
import IssuePage from 'components/pages/issues/IssuePage'
import ProfilePage from 'components/pages/profile/ProfilePage'
import ProjectPage from 'components/pages/projects/ProjectPage'
import NoticePage from 'components/pages/notice/NoticePage'
import SettingPage from 'components/pages/setting/SettingPage'
import Layout from 'components/layout/Layout'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<Layout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/issues" element={<IssuePage />} />
                <Route path="/profiles" element={<ProfilePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/setting" element={<SettingPage />} />
            </Route>
        </Routes>
    )
}

export default App
