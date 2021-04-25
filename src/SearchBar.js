import React, { useState } from "react";

function SearchBar(props){
    const [term, setTerm] = useState("");

    const onInputChange = event => {
        const { value } = event.target;

        setTerm(value)
    }

    const onFormSubmit = event => {
        event.preventDefault();

        props.onTermSubmit(term);
    }

    return(
        <div className="container">
            <form className="form-group" onSubmit={onFormSubmit} >
                <div>
                    <label htmlFor="searchBarInput">Youtube Search</label>
                    <input 
                        id="searchBarInput"
                        className="form-control"
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                    <small className="form-text text-muted">Search YouTube Videos Here!</small>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;