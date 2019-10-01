
import React from 'react';
import './Main.scss';

import CurrentPath from '../contents/CurrentPath/CurrentPath';
import CurrentInfo from '../contents/CurrentInfo/CurrentInfo';

import MainMenu from '../contents/MainMenu/MainMenu';

export default function Main() {
    return (
        <main class="main">
            <CurrentPath />
            <CurrentInfo />
            <MainMenu />
        </main>
    );
}