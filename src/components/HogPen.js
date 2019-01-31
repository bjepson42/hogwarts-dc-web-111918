import React, { Component } from 'react'
import Hog from './Hog'

export default class HogPen extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return <div className="ui three column grid">
            {this.props.hogs.map((hogData, idx) => (
              <Hog id={idx} hog={hogData} hideHog={this.props.hideHog} />
            ))}
          </div>
  }
}
