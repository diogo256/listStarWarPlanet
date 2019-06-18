import React, { Component } from 'react'

import { connect } from 'react-redux'
// import { dispatch } from 'rxjs/internal/observable/range'
// import busca from '../store/reducers/busca'
import { buscaVideo } from '../store/action/busca-video'



class SearchBar extends Component{

    pesquisaTermo = e => {
        if(e.keyCode === 13){
            const termo = e.target.value
            console.log(termo)
            this.props.buscaVideo(termo)
        }
    }

    render(){
        return(
            <div className="search-bar">
                <input type="text" onKeyDown={(e) => this.pesquisaTermo(e)} icon='search' size="large" placeholder="search ..."></input>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)