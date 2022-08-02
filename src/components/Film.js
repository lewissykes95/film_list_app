import React from "react";

const Film = ({name, children}) => {
    return (
        <>
            <a href={name}><h4>{children}</h4></a>
        </>

    )
};

export default Film;