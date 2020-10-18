import React from 'react';
import { withRouter } from 'react-router-dom'


class PokemonDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { PokemonDetails: null}

    }


    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`https://pokemonacademyapi-km.herokuapp.com/pokemons/${name}`)
        .then(response => response.json()
        .then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({PokemonDetails: jsonResponse});
        }))
    }

    onBackButtonClick = () => {
        this.props.history.goBack();
    }

    renderPokemon = () => {
        const { imageUrl, name, types, abilities, height, weight } = this.state.PokemonDetails;
        return(
            <div>
                <h3>{`name: ${name}`}</h3>
                <h3>{`types: ${types}`}</h3>
                <h3>{`abilities: ${abilities}`}</h3>
                <h3>{`height: ${height}`}</h3>
                <h3>{`weight: ${weight}`}</h3>
                <img src={imageUrl}/>  


            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Pokemon Details! </h1>
                {this.state.PokemonDetails && this.renderPokemon()}
                {!this.state.PokemonDetails && <h2>Loading details</h2>}
                <button onClick={this.onBackButtonClick}>Back to list</button>
            </div>
        )
    }
}

export default withRouter(PokemonDetails)