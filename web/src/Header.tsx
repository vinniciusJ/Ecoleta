import React from 'react'

interface HeaderProps {
    title: string
}

// React.FC => Para componentes escritos em formato de função (tipo)

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header