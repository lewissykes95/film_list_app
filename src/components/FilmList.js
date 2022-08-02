import React from "react";
import Film from "./Film"


const FilmList = ({films}) => {

    const FilmNodes = films.map( film => {
        return(
            <Film name={film.url} key={film.id}>{film.name}</Film>
        )
    })

    return (

        <>
            {FilmNodes}
        </>
    );
};


export default FilmList;