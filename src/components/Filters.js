import React, { Component } from 'react'

export default class Filters extends Component {
  render(){
    return (<div>
              <button onClick={this.props.sortByName}>Sort by Name</button>
              <button onClick={this.props.sortByWeight}>Sort by Weight</button>
              <button onClick={this.props.hideHogs}>{!this.props.appState.hogsHidden ? "Hide All The Hogs" : "Show All The Hogs"}</button>
              <label>Greased<input type="checkbox" onChange={this.props.filterGreased}/></label>
              <br/>
              <br/>
            </div>
    )



  }
}
