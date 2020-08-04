import React from "react";
import {MenuItem} from "../Preview/Preview";


export const Settings = ({selectedTitle, setTitle}) => {
    const changeName = (event) => {
        setTitle(event.target.value)
    };

    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for ="firstname">First Name:</label>
                <input onChange = {changeName} type = "text" id = "name" name = "firstname" value = {selectedTitle}/>
            </div>
        </section>
    );
};

