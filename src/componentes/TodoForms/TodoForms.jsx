import { useState} from 'react'
import './index.scss'

const TodoForms = ({addTodo}) => {

  const [task, setTask] = useState('');
  const [obs, setObs] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!task || !obs || !category) {
      return window.alert("Prencher todos os campos")
    }

    addTodo(task, obs, category, date)

    //limpar campos após o cadastro
    setTask('');
    setObs('');
    setCategory('');
    setDate('');
    console.log(task, obs, category);
  }


  return (
    <div className='Todo'>
        <h1>Criar Tarefas</h1>
        <form onSubmit={handleSubmit} className='Todo__Forms'>
          <div className='Todo__Forms-cadastro'>
            <input value={task} type='text' placeholder='Digite a tarefa' onChange={(ttf)=> setTask(ttf.target.value)}></input>
            
            <input value={date} onChange={(trf)=> setDate(trf.target.value)} type='date'/>
          </div>
          <div className='Todo__Forms-cadastro'>
            <select value={category} onChange={(trf)=> setCategory(trf.target.value)} className=''>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Estudos'>Estudos</option>
            </select>
            <input value={obs} type='text' placeholder='Digite uma obs' onChange={(trf)=> setObs(trf.target.value)}></input>
          </div>          
            <button type='submit'>CRIAR TAREFA</button>
        </form>      
    </div>
  )
}

export default TodoForms