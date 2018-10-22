import React from 'react';

class TopBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <div style={{height: '100px', width: '100%', border: '1px solid black' }}>
            {this.props.feedback}
        </div>
        )
    }
}

export default TopBox;
