import React from 'react';
var searchAction = require('../action/searchAction');
class Result extends React.Component {
    onClick(e){
    	context.executeAction(searchAction, {searchKey:'hehe'});
    }
    render() {
        return (
            <div>
                <h2>Result</h2>
                <p>This is searching results of term "iphone 6".</p>
                <button onClick={this.onClick}>Click Me</button>
            </div>
        );
    }
}

export default Result;