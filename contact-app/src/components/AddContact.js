import React from "react";

class Addcontact extends React.Component{
    render()
    {

        return(
        <div className="ui main">
            <h2>Hello World</h2>
            <form className="u form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>
            </form>
            <button className="ui button blue">Add</button>
        </div>
        );
        
    }
}

export default Addcontact;