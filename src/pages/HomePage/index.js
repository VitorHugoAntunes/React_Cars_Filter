import React from 'react'

import AsideForm from '../../components/AsideForm';
import MainContent from '../../components/MainContent';
import MenuToggle from '../../components/MenuToggle';

import './styles.css'

function HomePage() {
    return (
        <div className="appContainer">
            <aside className="asideLeft">
                <AsideForm/>
            </aside>
            <main>
                <MainContent/>
            </main>
            <aside className="menuToggle">
                <MenuToggle/>
            </aside>
        </div>
    )
}

export default HomePage;
