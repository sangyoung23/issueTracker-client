import React from 'react'
import { SlidePanelProps } from 'types/slidePanel.type'
import { Overlay, Panel } from './SlidePanel.styles'

const SlidePanel: React.FC<SlidePanelProps> = ({
    isOpen,
    onClose,
    children,
}) => {
    return (
        <>
            <Overlay isOpen={isOpen} onClick={onClose} />
            <Panel isOpen={isOpen}>{children}</Panel>
        </>
    )
}

export default SlidePanel
