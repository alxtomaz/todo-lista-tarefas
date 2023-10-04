import React, { useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import './index.scss'

const Edit = ({todos1}) => {
const {EditId} = useParams();
const selectTask = todos1.find((ttf)=> ttf.id == EditId);

const [todos, setTodos] = useState(todos1)
const [task, setTask] = useState(selectTask.title);
const [date, setDate] = useState(selectTask.date);
const [category, setCategory] = useState(selectTask.category);
const [obs, setObs] = useState(selectTask.description);

const atualizar = (idEdit) => {

  console.log(selectTask.title)
  const validacao = window.confirm('Você tem certeza, que deseja editar essa tarefa ?');

 if(validacao === true) {

  for (let i = 0; i < todos.length; i++) {
    if (idEdit == todos[i].id) {
      todos[i].id = idEdit;
      todos[i].title = document.getElementById('task').value;
      todos[i].date = document.getElementById('date').value;
      todos[i].category = document.getElementById('category').value;
      todos[i].description = document.getElementById('obs').value;
      console.log(todos);
      console.log(todos1);
    }
  }
}
}

  return (      
    <div className='Todo'>
      <h1>Editar Tarefas</h1>

        <div className='Todo__Forms'>
          <div className=''>
            <input
            className='item'
              value={task} 
              onChange={(e)=> setTask(e.target.value)} 
              id='task' 
              type='text' 
              placeholder='Digite a tarefa'>
            </input>
            <input
              value={date} 
              onChange={(e)=> setDate(e.target.value)} 
              id='date' 
              type='date'>
            </input>
          </div>
          <div className=''>
            <select value={category} onChange={(e)=> setCategory(e.target.value)} id='category' className=''>
                <option value=''>Selecione uma categoria</option>
                <option value='Trabalho'>Trabalho</option>
                <option value='Pessoal'>Pessoal</option>
                <option value='Estudos'>Estudos</option>
            </select>
            <input
            className=''
              value={obs} 
              onChange={(e)=> setObs(e.target.value)}  
              id='obs'  
              type='text'
              placeholder='Digite uma obs'>
            </input>
          </div>          
          <button onClick={()=>(atualizar(selectTask.id))}><Link to={'/'}>EDITAR TAREFA</Link></button>
        </div>   
    </div>
  )
}

export default Edit