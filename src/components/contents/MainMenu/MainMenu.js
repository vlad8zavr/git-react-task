
import React from 'react';
import './MainMenu.scss';

export default function CurrentInfo() {
    return (
        <div class="main-menu">
            <div class="main-menu__item main-menu__item_active">files</div>
            <div class="main-menu__item">branches</div>
        </div>
    );
}