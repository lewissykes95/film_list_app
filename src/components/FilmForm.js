import React, {useState} from "react"; 


const FilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");


    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    };
    
    const handlFilmInput = (event) => {
        event.preventDefault();

        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();

        if(!nameToSubmit || !urlToSubmit){
            return
        }

        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        })

        setName("");
        setUrl("");

    }

    return (
        <form className="film-form" onSubmit={handlFilmInput}>
            
            <div className="flex-item-form">
                <input
                type="text"
                placeholder="Title:"
                value={name}
                onChange={handleNameChange}
                className="text-box"
                />
            </div>

            <div className="flex-item-form">
                <input
                type="url"
                placeholder="Enter Review Link..."
                value={url}
                onChange={handleUrlChange}
                className="text-box"
                />
            </div>
            
            <div className="flex-item-form">
                <input
                type="submit"
                value="Add Film"
                className="button"
                />
            </div>

        </form>
    )

}


export default FilmForm;