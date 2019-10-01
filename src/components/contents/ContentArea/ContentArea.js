
import React from 'react';
import './ContentArea.scss';

function ContentAreaHead() {
    return (
        <div className="content-area__head">
            <div className="content-area__name">Name</div>
            <div className="content-area__commit">Last commit</div>
            <div className="content-area__message">Commit message</div>
            <div className="content-area__committer">Committer</div>
            <div className="content-area__date">Updated</div>
        </div>
    );
}

export default function ContentArea() {
    return (
        <div className="content-area">
            <ContentAreaHead />
        </div>
    );
}