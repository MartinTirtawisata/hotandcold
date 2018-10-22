import React from 'react';
import Head from 'next/head';
import { Layout, Button, Alert, Row, Col, Input,  Tabs, Tag, Divider, Modal, notification} from 'antd';
import TopBox from "../components/app/common/hot/top-box";
import BottomBox from "../components/app/common/hot/bottom-box";


class Hot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentValue: null,
            guessCount: 0,
            guessList: [],
            totem: 25
        };
    }

    componentDidMount () {

    }

    updateValue = (num) => {
        this.setState({currentValue: num.currentTarget.value});
    };

    guess = () => {
        let currentGuess = this.state.currentValue;
        if(currentGuess){
            let guessCount = this.state.guessCount;
            let guessList = this.state.guessList;

            guessList.push(currentGuess);
            guessCount = guessCount + 1;

            let totem = this.state.totem;

            let totemDiff = totem - parseInt(currentGuess);

            let result = '';

            if(totemDiff >= 20){
                result = 'Cold';
            } else if(totemDiff >= 10){
                result = 'Warm';
            } else if(totemDiff >= 5){
                result = 'Hot!';
            } else if(totemDiff == 0){
                result = 'Yay!';
            }

            console.log(result);



            this.setState({guessList: guessList, guessCount: guessCount, result: result});

            console.log(guessList);
        } else {
            notification['error']({
                message: 'Error',
                description: 'Please enter a valid number!',
            });

        }

    };

    render() {
        return (

            <div>
                <Row type={'flex'} align={'center'}>
                    <Col>

                        <div className={'bor m-t-xl'} style={{minHeight: '600px', minWidth: '600px'}}>

                            <TopBox res={this.state.result} />

                            <div style={{height: '400px', width: '100%', borderBottom: '1px solid #ddd'}} className={'p-xl'}>

                                <br/>
                                <br/>
                                <br/>
                                <Input type={'number'} placeholder="Basic usage" size={'large'} onChange={this.updateValue} />
                                <br/>
                                <br/>
                                <Button type={'primary'} onClick={this.guess} block={true} size={'large'}>Guess</Button>

                                <br/>
                                <br/>

                                {this.state.guessList.length>0 && <h1 className={'text-center'}>Guess #{this.state.guessList.length}!</h1>}

                            </div>


                            <BottomBox guessList={this.state.guessList} />


                        </div>


                    </Col>
                </Row>




            </div>


        )
    }
}




export default Hot






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




import React from 'react';
import Head from 'next/head';
import {Layout, Button, Alert, Tabs, Divider, Modal, Row, Col, Tag} from 'antd';


class BottomBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }


    componentDidMount () {

    }



    render() {
        return (

            <div style={{height: '100px', width: '100%'}}>
                <br/>
                <Row type={'flex'} align={'center'}>
                    <Col>
                        {this.props.guessList.map(function (guess) {
                            return <Tag key={guess}>{guess}</Tag>
                        })}

                    </Col>
                </Row>
            </div>


        )
    }
}




export default BottomBox
