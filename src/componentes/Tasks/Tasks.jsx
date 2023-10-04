import {useState} from 'react'
import './index.scss'
import TodoForms from '../TodoForms/TodoForms'
import Search from '../Search/Search';
import { BsTrash } from '../../../react-icons/Bs';
import { FaEdit } from '../../../react-icons/Fa';
import { AiFillLike, AiFillDislike } from '../../../react-icons/Ai';
import { Link } from 'react-router-dom';

const Tasks = ({todos1, setTodos1}) => {

  const [todos, setTodos] = useState(todos1);

    //add objects ao array atraves do todoforms
    const addTodo = (title, description, category, date) => {

        const newTodo =         
          {
            id: Math.floor(Math.random() * 10000),
            title,
            description,
            category,
            completed: false,
            date,
            unrealized: false,
          }

          const updatedTodosData = [...todos]

          updatedTodosData.unshift(newTodo);

          setTodos(updatedTodosData);
          setTodos1(updatedTodosData)
          console.log(todos1);
    };

    //remove itens a parti do id
    const removeTodos = (id) => {

      const validacao = window.confirm('Você deseja excluir esse item ?')

      if(validacao === true ) {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todos) =>
        todos.id !== id ? todos : null);
        setTodos(filteredTodos)
      }
    }

    // verifica se a tarefa está completa ou incompletna
    const iscompleted = (id) => {
      console.log(id)
      const newTodos = [...todos];
      newTodos.map((ttf) => {
        if(ttf.id === id) {
          if(ttf.unrealized === true) {
            window.alert('Tarefa já finalizada como não realizada')
            todos
          }else {
            ttf.completed = !ttf.completed
          }
        }
      })
      setTodos(newTodos)
      console.log(newTodos);
    };
    
    // verifica se a tarefanão foi realizada
    const unrealized = (id) => {
      console.log(id)
      const newTodos =[...todos];
      
      newTodos.map((ttf) => {
        if(ttf.id === id) {
          if(ttf.completed === true) {
            window.alert('Tarefa já finalizada')
            todos
          }else {
            ttf.unrealized = !ttf.unrealized
          }
      }});   
      setTodos(newTodos);
      console.log(newTodos);
    };

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('false');
    const [sort, setSort] = useState('Asc');
    const [filterunrealized, setUnrealized] = useState('false');
  

  return (
    <div className='TodoForms'>
        <TodoForms addTodo={addTodo}/>
        <Search search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} setSort={setSort} filterunrealized={filterunrealized} setUnrealized={setUnrealized}/>
        <>{todos.
          filter((ttf)=>
          filterunrealized === "true" ? ttf.unrealized : !ttf.unrealized
          )
          .filter((ttf)=> 
            filter  === "false" 
            ? !ttf.completed 
            : filter === "true" 
            ? ttf.completed 
            : todos
          )
          .filter((ttf)=> 
            ttf.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc" 
            ? a.title.localeCompare(b.title) 
            : b.title.localeCompare(a.title)
          )
          .map((tasktantofaz) => (
          <div key={tasktantofaz.id}>
              <div 
                style={
                  { textDecoration: tasktantofaz.completed ? "line-through 3px" : tasktantofaz.unrealized ? "line-through 3px red" : "",
                    background: tasktantofaz.completed ? "grey" : tasktantofaz.unrealized ? "rgb(200, 44, 44)" : "",          
                  }
                  
                } 
                className='organization__tasks'>
                <div className='item'><p>{tasktantofaz.title}</p></div>
                <div className='item'><p>{tasktantofaz.date}</p></div>
                <div className='item__category'><p>{tasktantofaz.category}</p></div>                
                <div className='item__description'><p>{tasktantofaz.description}</p></div>
                
                <div className='item__button'>
                  <div className=''>
                    <button 
                    className='item__completed-ok'
                    onClick={()=> iscompleted(tasktantofaz.id)} 
                    value={tasktantofaz.completed}
                    ><img src='feito.png'/>
                    </button>
                  </div>
                  <div>
                  <button 
                    className='item__completed-no'
                    onClick={()=> unrealized(tasktantofaz.id)}
                    value={tasktantofaz.unrealized}
                    key={tasktantofaz.id}        
                    ><img src='nãorealizado.png'/>
                    </button>
                  </div>            
                  <p><Link to={`Edit/${tasktantofaz.id}` }><img className='edit' src='editar.png'/></Link></p>
                  <p onClick={()=> removeTodos(tasktantofaz.id)}><img className='excluir' src='excluir.png'/></p>        
                </div>
              </div>
          </div>          
        ))}</>
    </div>
  )
}

export default Tasks