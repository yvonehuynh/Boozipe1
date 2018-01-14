import React from 'react';
import { Link } from 'react-router-dom';

export default class Boozeinputs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="input-container">
                <form action="" onSubmit={this.props.search}>
                    <label htmlFor="booze-search" className="visuallyhidden">Search Your Alcohol</label>
                    <input type="text" name="booze-search" placeholder="search your alcohol" id="booze-input" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}