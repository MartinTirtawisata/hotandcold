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