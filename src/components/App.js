import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogPen from './HogPen'
import Filters from './Filters'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sortBy: null,
      filterGreased: false,
      hogsData: hogs,
      hogsHidden: false
    }
  }

    filterGreased = () => {
      this.setState({
        filterGreased: !this.state.filterGreased
      })
      let newHogsArr = hogs
      this.state.filterGreased ? null : newHogsArr = hogs.filter(hog => (hog.greased !== this.state.filterGreased))
      this.setState({
        hogsData: newHogsArr
      })
    }

    sortByName = () => {
      console.log("sort name")
      let newHogsArr = this.state.hogsData.sort(function(a,b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) { return -1 }
        if (nameB < nameB) { return 1 }
        return 0
      })
      console.log(newHogsArr)
      this.setState({
        hogsData: newHogsArr
      })
    }

    sortByWeight = () => {
      let newHogsArr = this.state.hogsData.sort(function(a,b){ return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] })
      console.log(newHogsArr)
      this.setState({
        hogsData: newHogsArr
      })
    }

    hideHogs = () => {
      let newHogsArr = []
      this.state.hogsHidden ? newHogsArr = hogs : null
      this.setState({
        hogsData: newHogsArr,
        hogsHidden: !this.state.hogsHidden
      })
    }

    hideHog = (hogName) => {
      let newHogsArr = this.state.hogsData.filter(function(hog){
        return hog.name != hogName})
      this.setState({
        hogsData: newHogsArr
      })
    }


  render() {
    return (
      <div className="App">
          <Nav />
          <Filters appState={this.state} hideHogs={this.hideHogs} filterGreased={this.filterGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
          <HogPen hideHog={this.hideHog} hogs={this.state.hogsData} appState={this.state} />
      </div>
    )
  }
}

export default App;
