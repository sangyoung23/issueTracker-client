import { Outlet } from 'react-router-dom'
import SideBar from 'components/elements/sidebar/SideBar'

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
