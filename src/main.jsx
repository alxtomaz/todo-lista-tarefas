import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {  createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Organization from './views/Organization/Organization.jsx';
import Edit from './views/Edit/Edit';

const App = () => {

  const [todos1, setTodos1]  = useState([
    { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios","category": 'Pessoal', "completed": false, 'date':'', 'unrealized': false},
    // { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora","category": 'Pessoal', "completed": false },
    // { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop","category": 'Pessoal', "completed": false },
    // { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto","category": 'Pessoal', "completed": false },
    // { "id": 5, "title": "trabalhar", "description": "Chegar ao escritorio antes das 20:00","category": 'Pessoal', "completed": false },
    // { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00","category": 'Pessoal', "completed": false },
    // { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta","category": 'Pessoal', "completed": false },
    // { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos","category": 'Pessoal', "completed": false },
    // { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar","category": 'Pessoal', "completed": false },
    // { "id": 10, "title": "shopping", "description": "Fazer algumas compras no shopping","category": 'Pessoal', "completed": false },
  ]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Organization todos1={todos1} setTodos1={setTodos1}/>
    },
    {
      path: "/Edit/:EditId",
      element: <Edit todos1={todos1} />,
    },
  ]);

  return (
    <>
       <React.StrictMode>
          <RouterProvider router={router} />
       </React.StrictMode>,
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
