import React from "react";

const SearchParams = () => {
    return (
        <>
            <div className="search-params">
                <form>
                    <label htmlFor="location">Location</label>
                    <input id="location" placeholder="Location"/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default SearchParams;