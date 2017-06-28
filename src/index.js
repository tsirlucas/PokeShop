import React, {Component} from 'react';
import {AppLoading} from 'expo';

import Routes from './Routes';
import {requestPokemons} from './api';

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.loadPokemons = this.loadPokemons.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }

    async loadPokemons() {
        const pokeResult = await requestPokemons();
        const pokemons = pokeResult.map((pokemon) => {
            pokemon.sold = false;
            return pokemon;
        });

        this.setState({pokemons});
    }

    toggleState(pokeStatus, index) {
        let pokemons = this.state.pokemons;
        pokemons[index].sold = !pokeStatus;
        this.setState({pokemons});
    }

    componentDidMount() {
        this.loadPokemons();
    }

    render() {
        return (
            this.state.pokemons ?
                <Routes screenProps={{pokemons: this.state.pokemons, toggleState: this.toggleState}}/> :
                <AppLoading/>
        );
    }
}
