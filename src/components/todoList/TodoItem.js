import React, { useState, useCallback } from 'react';

import { MdAdd } from 'react-icons/md';
import './TodoItem.scss';

const TodoItem = () =>{
  return (
    <form className="TodoItem">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">
            <MdAdd/>
        </button>
    </form>
  );
}
export default TodoItem;