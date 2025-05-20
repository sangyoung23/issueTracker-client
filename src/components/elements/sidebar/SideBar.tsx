import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBell,
    faList,
    faFolder,
    faGear,
    faUser,
    faRightFromBracket,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import {
    SideBarContainer,
    SidebarTop,
    SidebarMenu,
    SidebarBottom,
    HamburgerButton,
    Overlay,
} from './Sidebar.styles'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => setIsOpen(!isOpen)
    const closeSidebar = () => setIsOpen(false)

    return (
        <>
            <HamburgerButton
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </HamburgerButton>

            <Overlay isOpen={isOpen} onClick={closeSidebar} />

            <SideBarContainer className={isOpen ? 'open' : ''}>
                <SidebarTop>
                    <img src="/logo.png" alt="Logo" />
                </SidebarTop>

                <SidebarMenu>
                    <NavLink to="/dashboard" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faHome} />
                        <span>대시보드</span>
                    </NavLink>
                    <NavLink to="/issues" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faList} />
                        <span>일감</span>
                    </NavLink>
                    <NavLink to="/projects" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faFolder} />
                        <span>프로젝트</span>
                    </NavLink>
                    <NavLink to="/notice" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faBell} />
                        <span>공지사항</span>
                    </NavLink>
                    <NavLink to="/setting" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faGear} />
                        <span>설정</span>
                    </NavLink>
                </SidebarMenu>

                <SidebarBottom>
                    <NavLink to="/profile" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>내 정보</span>
                    </NavLink>
                    <NavLink to="/logout" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>로그아웃</span>
                    </NavLink>
                </SidebarBottom>
            </SideBarContainer>
        </>
    )
}

export default SideBar
