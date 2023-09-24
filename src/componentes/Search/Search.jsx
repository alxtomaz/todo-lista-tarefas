import './index.scss'

const Search = ({search, setSearch, filter, setFilter, setSort, filterunrealized, setUnrealized}) => {
  return (
    <div className='search-filter'>
        <div className=''>   
            <h2>Pesquisar</h2>
            <input 
            placeholder="Pesquisar Tarefa" 
            value={search} 
            onChange={(e)=> setSearch(e.target.value)}
            />
        </div> 
        <div className=''>
            <h2>Status</h2>
            <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                <option value='all'>Todos</option>
                <option value='true'>Completados</option>
                <option value='false'>Incompletas</option>
            </select>
        </div>
        <div className=''>
            <h2>Tarefas não realizadas</h2>
            <select value={filterunrealized} onChange={(e)=> setUnrealized(e.target.value)}>
                <option value='false'>A Realizar</option>
                <option value='true'>Não Realizadas</option>
            </select>
        </div>
        <div className=''>
            <h2>Ordem Alfabetica</h2>
            <div className='search-filter__alfabetica'>
                <button onClick={(e)=> setSort('Asc')}>Asc</button>
                <button onClick={(e)=> setSort('Desc')}>Desc</button> 
            </div>            
        </div>
    </div>
  )
}

export default Search