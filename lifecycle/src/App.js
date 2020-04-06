//WILL METHODS - CALLED RIGHT BEFORE SOMETHING HAPPENS 
//DID METHODS - CALLED RIGHT AFTER SOMETHING HAPPENS

import React, { Component } from 'react';
import Child from './Child'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      isLoaded: false,
      items: []
    }
    console.log("i'm a constructor");
  }

  //BEFORE THE APP IS COMPLETED
  componentWillMount() {
    console.log("Component will mount");
  }
  //AFTER THE INITIAL MOUNT IS COMPLETED
  componentDidMount() {
    console.log("component did mount");

    // fetch("https://corona.lmao.ninja/states")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json
    //     });
    //   });

    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 0)
  }

  handleClick = () => {

    this.setState({
      count: this.state.count + 1
    })

  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  render() {

    console.log("rendered component");

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          {/* Lifecycle Methods <br />
          
        <Child test={4} /> */}
        Loaded Data


          <button onClick={this.handleClick}>Click Me</button>

          <Child val={this.state.count} />
          {/* <ul>
            {
              this.state.items.map((item, index) => {
                return <li key={index}>{item.state} | {item.cases}</li>
              })
            }
          </ul> */}

        </>
      )
    }
  }
}

export default App
