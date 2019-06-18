import youtubeSearch from 'youtube-api-v3-search'
import Yapi from "./../../api"
// import { dispatch } from "rxjs/internal/observable/range";

const API_KEY = Yapi

export const buscaVideoInicio = () => {
    return{
        type: 'BUSCA_VIDEO_INICIO',
        carregando: true,
        erro: false
    }
}

export const buscaSucesso = (videos) => {
    return{
        type: 'BUSCA_VIDEO_SUCESSO',
        videos,
        carregando: false,
        erro: false
    }
}

export const buscaErro = () => {
    return{
        type: 'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    }
}

export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoInicio())
        youtubeSearch(API_KEY, {q: termo})
        .then((data) => dispatch(buscaSucesso(data.items)))
        .catch(() => dispatch(buscaErro()))
        
    }
}