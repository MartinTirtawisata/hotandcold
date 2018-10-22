import React from 'react';
import Head from 'next/head';
import { Layout, Button, Alert, Tabs, Divider, Modal} from 'antd';


class TopBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }


    componentDidMount () {

    }



    render() {
        return (

            <div style={{height: '100px', width: '100%', borderBottom: '1px solid #ddd'}}>
                <br/>
                <h1 className={'text-center'}>{this.props.res}</h1>
            </div>


        )
    }
}




export default TopBox