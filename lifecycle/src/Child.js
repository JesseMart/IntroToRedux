import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)

        this.state = {
            increasing: false
        }
    }
    //THIS COMPONENT IS USED WHEN IT RECEIVES A PROP
    componentWillReceiveProps(nextProps) {

        console.log("will receive props");

        console.log(`${this.props.val}`);

        console.log(`${nextProps.val}`);

        let increasing = nextProps.val > this.props.val;

        this.setState(
            {
                increasing: increasing
            }, () => {
                console.log("state of increasig:", this.state.increasing);
            })

    }
    //IT UPDATES ONLY WHEN THE STATEMENT IS TRUE
    shouldComponentUpdate(nextProps, nextState) {

        return (nextProps.val > 5)
    }

    render() {
        return (
            <>
                Child
                <br />
                {this.props.val}
            </>
        )
    }
    //AFTER THE RENDER() IS COMPLETED
    componentDidUpdate(prevProps, preState) {
        console.log(`componentDid Update prevProps: ${prevProps.val}`);
    }
}

export default Child