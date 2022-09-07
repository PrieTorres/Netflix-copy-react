import React, { useEffect, useState } from 'react'; 
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow.js'

export default () => {

  const [movieList, setMovieList] = useState([]);//vai iniciar com um arrary vazio, vai usar a funcao set movie list para mudar a lista

  useEffect( () => { //quando a tela for carregada vai ser executado -->
    const loadAll = async () => {//carregar tudo
      // pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      Header
      Destaque
      <section className="listas">
        {movieList.map((item, key)=>(
          <div>
            <MovieRow key={key} title={item.title} items={item.itens}/>
          </div>
        ))}
      </section>
      rodape
    </div>
  )
}