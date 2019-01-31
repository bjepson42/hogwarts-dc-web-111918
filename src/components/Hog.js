import React, { Component } from 'react'



export default class Hog extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }

  showDetails = () => {
      this.setState({
        showDetails: !this.state.showDetails
      })
  }

  hideHog = () => {
    //document.getElementById(this.props.id).remove()
  }

  render(){
    return (<div class="column">
              <div id={this.props.id} className="ui raised centered card">
                <img src={require("../hog-imgs/" + this.props.hog.name.split(' ').join('_').toLowerCase() + ".jpg")} alt={this.props.hog.name}/>
                <h2>{this.props.hog.name}</h2>
                <button onClick={this.showDetails}>Show Details</button>
                <button onClick={()=>{this.props.hideHog(this.props.hog.name)}}>Hide Hog</button>
                {this.state.showDetails ? <div class="description"><p>Specialty: {this.props.hog.specialty}, Greased: {this.props.hog.greased ? "Yes" : "No"}, Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}, Medal: {this.props.hog['highest medal achieved']} </p></div> : null}
              </div>
            </div>)
  }
}
