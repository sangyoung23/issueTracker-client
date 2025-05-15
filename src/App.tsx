import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/pages/login/LoginPage'
import DashboardPage from './components/pages/dashboard/DashboardPage'
import IssuePage from './components/pages/issues/IssuePage'
import ProfilePage from './components/pages/profile/ProfilePage'
import ProjectPage from './components/pages/projects/ProjectPage'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/issues" element={<IssuePage />} />
                <Route path="/profiles" element={<ProfilePage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </>
    )
}

export default App
