import React, { Component } from 'react'

export class Profile extends Component {
  constructor(){
    super()
    this.state={
      counter:2,
      timer:0,
      intervaall:null
    }}

    componentDidMount(){
      console.log("Je suis en vie");
    this.setState({
      intervaall:setInterval(()=>this.setState({timer:this.state.timer +1}),1000)
    })
  }

  componentDidUpdate(){
    console.log(this.state.counter +3, "est modifier")
  }
  componentWillUnmount(){
    console.log("Suis mort")
  }
  render() {
    return (

        <div className='card'>
        <img className="card-image" src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Ibrahim_Traor%C3%A9_-_2023_%28cropped%29.png' alt="photo de profil"></img>
        <h2 className="card-title">Nana Mohamadi</h2>
        <p className="card-text">Etudiant</p>
        <h5 className="card-text">Burkinabé && GoMyCode</h5>
        <hr/>
        <h3>{this.state.timer}</h3>
        </div>
        
      )
  }
}

export default Profile
