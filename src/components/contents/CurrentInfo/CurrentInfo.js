
import React from 'react';
import './CurrentInfo.scss';

export default function CurrentInfo() {
    return (
        <div class="current-info">
            <div class="current-info__heading">
                <div class="current-info__name">arcadia</div>
                <div class="current-info__menu">trunk</div>
            </div>
            <div class="current-info__text">
                Last commit 
                <span class="current-info__commit">c4d248</span>
                <span class="current-info__divider">on</span> 
                <span class="current-info__date">20 Oct 2017, 12:24</span>
                <span class="current-info__divider current-info__divider_right">by</span>  
                <p class="current-info__author author_first-letter_red">robot-srch-releaser</p>
            </div>
        </div>
    );
}