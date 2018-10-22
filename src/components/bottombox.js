import React from 'react';

class BottomBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div style={{height: '100px', width: '100%', border: '1px solid black' }}>
                <h3>{this.props.guessList}</h3>
            </div>
        )
    }
}

export default BottomBox;