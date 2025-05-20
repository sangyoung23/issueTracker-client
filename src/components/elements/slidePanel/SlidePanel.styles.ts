import styled from '@emotion/styled'

export const Panel = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 900px;
    max-width: 80vw;
    height: 100vh;
    background-color: white;
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
    transform: translateX(${props => (props.isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
`

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: ${props => (props.isOpen ? '0.4' : '0')};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    transition: opacity 0.3s ease;
    z-index: 999;
`
