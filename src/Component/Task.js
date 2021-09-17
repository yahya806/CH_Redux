import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  deletetask } from '../js/action'
import Edit from './Edit'
import './Task.css';


const Task = ({el}) => {
const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,SetId] = useState()
    return (
        <div className='Task'>
            <div>
           
            
            <span className={el.isDone&&"line"}>{el.task}</span>
            </div>
            <div>
            <button onClick={()=>dispatch(deletetask(el.id))}style={{backgroundColor:'red',color:'white'}} >X</button>
            
            <button onClick={()=>{handleShow();SetId(el.id)}}style={{backgroundColor:'royaleblue',color:'white'}} ><i class="fal fa-edit"></i>Edit</button>
            <Edit show={show} handleClose={handleClose} id={id} />
            </div>
        </div>
    )
}

export default Task
