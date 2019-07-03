import React, {Component} from 'react'

import './ListaPlanet.css'
import Axios from 'axios';
import Loader from './loader';



class ListaPlanet extends Component{
    constructor(props){
        super(props)
        this.state = {
            estaCarregando: false,
            listaPlanet: '',
            listaFilmes: '',
            nextPage: null,
            prevPage: null
        }

        this.nextPageRequest = this.nextPageRequest.bind(this)
        this.previousPageRequest = this.previousPageRequest.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    

    buscaPlanet() {
        this.setState({
            estaCarregando: true
        })

        Axios.get('https://swapi.co/api/planets/')
          .then(res => {
            const persons = res.data;
            this.setState({
                listaPlanet: persons.results,
                estaCarregando: false,
                nextPage: res.data.next,
                prevPage: res.data.previous
            })
            console.log(res, "diogo")
        })

        Axios.get('https://swapi.co/api/films/')
          .then(res => {
            const films = res.data;
            this.setState({
                listaFilmes: films.results,
                estaCarregando: false
            })
        })
    }

    previousPageRequest(){
        this.setState({
            estaCarregando: true
        })

        Axios.get(this.state.prevPage)
          .then(res => {
            const persons = res.data;
            this.setState({
                listaPlanet: persons.results,
                estaCarregando: false,
                nextPage: res.data.next,
                prevPage: res.data.previous
            })
        })
    }

    nextPageRequest(){
        this.setState({
            estaCarregando: true
        })

        Axios.get(this.state.nextPage)
          .then(res => {
            const persons = res.data;
            this.setState({
                listaPlanet: persons.results,
                estaCarregando: false,
                nextPage: res.data.next,
                prevPage: res.data.previous
            })
        })
    }

    scrollToTop() {
        if (window.pageYOffset > 0) {            
            console.log("subiu")
            window.scroll(0, 0);
        }
      }

    componentDidMount(){
        this.buscaPlanet()
    }

    componentDidUpdate(){
        this.scrollToTop()
    }
    
    render(){
        const listaPlanet = this.state.listaPlanet || []
        const listaFilms = this.state.listaFilmes || [] 
        const loader = this.state.estaCarregando || false
        const next = this.state.nextPage || null
        const previous = this.state.prevPage || null
        
        return(
            <div>
                {loader && <Loader/> }
                {listaPlanet.map((planet,i) => 
                    <div className="row" key={i}>                        
                        <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">{planet.name}</h2>
                                <p><strong>population: </strong>{planet.population}</p>
                                <p><strong>climate: </strong>{planet.climate}</p>
                                <p><strong>terrain: </strong>{planet.terrain}</p>
                                <strong>featured in films:</strong>
                                <ul>
                                    {                                        
                                        planet.films.map((planet, i) =>
                                            <li key={i}> 
                                                {
                                                    listaFilms.map((film, j) =>
                                                        planet === film.url && <span key={j} >{film.title}</span>
                                                    )
                                                }  
                                            </li>                                        
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                <div className="card-action">
                    {
                        previous && <button type="button" className="cinza" onClick={this.previousPageRequest}>previous</button>
                    }
                    {
                        next && <button type="button" className="blue" onClick={this.nextPageRequest}>Next</button>
                    }
                </div>
            </div>
        )
    }
}

export default ListaPlanet