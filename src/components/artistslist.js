import React from 'react';
import { Link } from 'react-router-dom'; // for using links in react

// list is received from home
const ArtistsList = (props) => {
    //console.log(props);

    const list = ({allArtists}) => {
        // check if allArtists has any data
        if (allArtists) {
            return allArtists.map((artist) => {

                // style for LINK element
                const style = {
                    background: `url('/images/covers/${artist.cover}.jpg)
                    no-repeat`
                }

                return ( 
                    <Link key={artist.id} to={`/artist/${artist.id}`}
                        className="artist_item"
                        style={style}
                    >
                        <div>{artist.name}</div>
                    </Link>
                )
            })
        }
    }

    return (
        <div className="artists_list">
            <h4>Browse the artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistsList;