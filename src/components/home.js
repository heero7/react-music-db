import React, { Component } from 'react';

// Components
import Banner from '../components/banner';
import ArtistsList from '../components/artistslist'

//variable that holds the URL
const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    // receive data from API 
    // via Props for state
    constructor(props){
        super(props);

        // store everything inside a state
        this.state = {
            //key is artists
            artists: '' // starts as null when first loaded
        }
    }

    componentDidMount(){
        // after the render
        fetch(URL_ARTISTS, {
            method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            this.setState({
                artists: json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner />
                <ArtistsList allArtists={this.state.artists} />
            </div>
        )
    }
}

export default Home;