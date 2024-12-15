import React from 'react'
import clsx from 'clsx'
import style from './style.css'
export type SidebarButtonPros = React.HTMLAttributes<HTMLButtonElement> & {
    onClick?: (e: React.MouseEvent) => void;
    selected?: boolean
}

export default function SidebarButton({ onClick, selected = false, ...rest }: SidebarButtonPros) {
    return (
        <button onClick={onClick}>{rest.children}</button>
    )
}


