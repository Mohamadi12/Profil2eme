import React, { Component } from 'react'
import Profile from './Profile'

export class App extends Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }

  Shoow=()=>{
    this.setState({
     show:!this.state.show
    })
     }

  render() {
    return (
      <div>
       <button onClick={()=>this.Shoow()}>HIDE</button>
       <hr/>
        {this.state.show && <Profile />} 
      </div>
    )
  }
}

export default App
