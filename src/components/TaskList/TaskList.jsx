import React from 'react'
import './TaskList.css';
import { useSelector } from 'react-redux';

const TaskList = () => {

    const data = useSelector(state => state.data.data);
    console.log(data);

  return (
    <div className='tasklist'>
        {
            data && data.map((item) => {
                
            })
        }
    </div>
  )
}

export default TaskList