import React, { Component } from "react";
import axios from "axios";
import { Row, Card, CardTitle, Table } from "react-materialize";
import '../App.css';



export default class Cars extends Component {
  state = {
    cardata: [],
    products:[]
  };


  componentDidMount() {
    axios.get(`document.json`).then(res => {
      const car = res.data.cars;
      this.setState({
        cardata: car
      });
    });
  }

compare =(product) => {
    const car = this.state.cardata.find(car => (
        car.id === product.id
    ))
    car.isClicked = !car.isClicked
    let newData 
    if(car.isClicked){
        newData = [...this.state.products, product]
    } else {
        let oldData = [...this.state.products]
        newData = oldData.filter(data => {
            return parseInt(data.id) !== parseInt(product.id)})  
    }
   
  
   this.setState({
            products: newData
        })      
}


  render() {
    var carjson = this.state.cardata;

    return (
      <div className="grey lighten-4">
          <p className="compare_title white-text">Comparison Chart</p>
        <div className="containit" style={{display: 'flex'}}>
          {carjson.map((res, i) => (
            
              <Row s={12} m={3} key={i}  >
        
            <Card 
              className="view_detail"
              style={{width: 350, height:400}}
              onClick={() => this.compare (res)}
              header = {<CardTitle image={res.image}
              > </CardTitle>}
              
            >
            <div className="middle">
              <div className="text">{res.isClicked ? "Remove" : "Compare"}</div>
              </div>
           
          
           <h5>{res.Model}</h5>
           <h5 className="price_of_car teal-text text-darken-2">{res.price}</h5>
       
           
            </Card>
            </Row>
           
          ))}


        </div>
        <div className="row compare">
    <div className="col-12 mt-5 text-center">
        <Table className="highlight table_data" > 
            <thead>
            <tr>
                <th></th>
                {this.state.products.map((carInfo, i) => (
                    <th key={i}>{carInfo.Model}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>PRICE</td>
                {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.price}</td>
                ))}
            
            </tr>
            <tr>
                 <td>MPG</td>
                {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.MPG}</td>
                ))}
            </tr>
            <tr>
                <td>Seating Capacity</td>
                {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.seating_capacity}</td> ))}
            </tr>

            <tr>
                 <td>Color</td>
                    {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.colors}</td>
                     ))}
            </tr>

            <tr>
                <td>Horsepower</td>
                {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.horsepower}</td>))}
            </tr>

            <tr>
                <td>Engine</td>
                {this.state.products.map((carInfo, i) => (
                    <td key={i}>{carInfo.engine}</td>
                    ))}
            </tr>
            </tbody>
           

          
        </Table>
        </div>
        </div>
      </div>
    );
  }
}
