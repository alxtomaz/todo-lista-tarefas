import {useState} from 'react'
import './index.scss'
import TodoForms from '../TodoForms/TodoForms'
import Search from '../Search/Search';
import { BsTrash } from 'react-icons/Bs';
import { FaEdit } from 'react-icons/Fa';
import { AiFillLike, AiFillDislike } from 'react-icons/Ai';

const Tasks = () => {

    const [todos, setTodos] = useState([
      { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios","category": 'pessoal', "completed": false, 'date':'', 'unrealized': false},
      { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora","category": 'pessoal', "completed": false },
      { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop","category": 'pessoal', "completed": false },
      { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto","category": 'pessoal', "completed": false },
      { "id": 5, "title": "trabalhar", "description": "Chegar ao escritorio antes das 20:00","category": 'pessoal', "completed": false },
      { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00","category": 'pessoal', "completed": false },
      { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta","category": 'pessoal', "completed": false },
      { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos","category": 'pessoal', "completed": false },
      { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar","category": 'pessoal', "completed": false },
      { "id": 10, "title": "shopping", "description": "Fazer algumas compras no shopping","category": 'pessoal', "completed": false }
    ]);


    //add objects ao array atraves do todoforms
    const addTodo = (title, description, category, date) => {
      const newTodos = [
        
        {
          id: Math.floor(Math.random() * 10000),
          title,
          description,
          category,
          completed: false,
          date,
          unrealized: false,
        },
        ...todos,
      ]
      setTodos(newTodos);
      console.log(newTodos);
    };

    //remove itens a parti do id
    const removeTodos = (id) => {
      console.log(id)
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todos) =>
      todos.id !== id ? todos : null);
      setTodos(filteredTodos)
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
    const [filter, setFilter] = useState('all');
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
            filter  === "all" 
            ? todos 
            : filter === "true" 
            ? ttf.completed 
            : !ttf.completed
          )
          .filter((ttf)=> 
            ttf.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc" 
            ? a.title.localeCompare(b.title) 
            : b.title.localeCompare(a.title)
          )
          // .filter((ttf) => 
          // ttf.unrealized === true 
          // ? !ttf.unrealized
          // : todos)
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
                    value={tasktantofaz.completed}><AiFillLike/>
                    </button>
                  </div>
                  <div>
                  <button 
                    className='item__completed-no'
                    onClick={()=> unrealized(tasktantofaz.id)}
                    value={tasktantofaz.unrealized}
                    key={tasktantofaz.id}        
                    ><AiFillDislike/>
                    </button>
                  </div>            
                  <p><FaEdit/></p>
                  <p onClick={()=> removeTodos(tasktantofaz.id)}><BsTrash/></p>            
                </div>
              </div>
          </div>          
        ))}</>
    </div>
  )
}

export default Tasks