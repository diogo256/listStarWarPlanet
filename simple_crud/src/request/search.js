import React from 'react'
import axios from 'axios'

export const buscaPlanet = (planet) => {
    axios.get('https://swapi.co/api/planets/')
      .then(res => {
        const persons = res.data;
    })
}