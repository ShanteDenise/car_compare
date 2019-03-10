import React, { Component } from 'react'
import axios from 'axios';



export default class Cars extends Component {

    state = {
       cardata: []
    }
   

    componentDidMount(){
        axios.get(`document.json`).then(res => {
         var car = res.data.cars

        this.setState({
            cardata: car

        })
    })

    }

  render() {
    var carjson =this.state.cardata 

    return (
      <div>
          <div>{carjson.map((res, i )=> (
              <p key={i}> {res.id}</p>
          ))}</div>

  
        
      </div>
    )
  }
}
