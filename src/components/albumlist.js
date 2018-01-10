import React from 'react';

const AlbumList = (props) => {

    const showList = ({albums}) => {
        // console.log("Albums, ",albums)
        if (albums) {
            return albums.map((album, index) => {
                console.log(album);
                return (
                    <img key={index} src={`/images/albums/${album.cover}.jpg`} alt={"Album cover"}/>
                )
            })
        }
    }

    return (
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;