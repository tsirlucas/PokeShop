import React from 'react';
import {Container, Content, List} from 'native-base';

import PokeItem from './PokeItem';

const PokeList = ({pokemons, toggleState, isSold}) => (
    <Container>
        <Content>
            <List>
                {pokemons.map((pokemon, index) => (
                    pokemon.sold === isSold &&
                    <PokeItem pokemon={pokemon} toggleState={toggleState}
                              key={index} index={index}/>
                ))}
            </List>
        </Content>
    </Container>
);

export default PokeList;
