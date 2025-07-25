import React from 'react'
import NavigationMenu from './NavigationMenu'
import ActionButtons from './ActionButtons'

function Header() {
    return (
        <header class="p-3 mb-3 border-bottom">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavigationMenu />
                    <ActionButtons />
                </div>
            </div>
        </header>
    )
}

export default Header