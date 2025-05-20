import styled from '@emotion/styled'

export const HamburgerButton = styled.button`
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 1200;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #333;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
    display: none;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1100;
    }
`

export const SideBarContainer = styled.div`
    width: 240px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 1150;

    a {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);

        &.open {
            transform: translateX(0);
        }
    }
`

export const SidebarTop = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
`

export const SidebarMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    margin-top: 24px;

    a {
        color: #333;
        text-decoration: none;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 8px;
        transition: background 0.2s, color 0.2s;

        &:hover {
            background-color: #ff9500;
            color: white;
        }

        &.active {
            background-color: #ff9500;
            color: white;
            font-weight: bold;
        }
    }
`

export const SidebarBottom = styled.div`
    padding-top: 16px;
    border-top: 1px solid #eee;

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #888;
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        transition: color 0.2s, background-color 0.2s;

        &:hover {
            background-color: #ff9500;
            color: white;
        }
    }
`
