import React from 'react';
import './TodoTempleate.scss';

const TodoTempleate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title"> 일정관리 </div>
                <div className="content">{children}</div>
        </div>
    )
}

export default TodoTempleate;