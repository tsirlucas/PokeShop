import React from 'react';
import {ListItem, Thumbnail, Text, Body} from 'native-base';

import {mediaEP} from '../api';

const PokeItem = ({pokemon, index, toggleState}) => (
    <ListItem onPress={() => toggleState(pokemon.sold, index)}>
        <Thumbnail square size={80}
                   source={{uri: `${mediaEP}${pokemon.pkdx_id}.png`}}/>
        <Body>
        <Text>{pokemon.name}</Text>
        <Text note>
            {pokemon.types.map(({name}) => name).join('/')}
        </Text>
        </Body>
    </ListItem>
);

export default PokeItem;