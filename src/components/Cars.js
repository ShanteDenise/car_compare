import React, { Component } from "react";
import axios from "axios";
import { Row, Card, CardTitle, Table } from "react-materialize";
import '../App.css';



export default class Cars extends Component {
  state = {
    cardata: [],
    products:[],
    isClicked: false
  };

 

  componentDidMount() {
    axios.get(`document.json`).then(res => {
      var car = res.data.cars;

      this.setState({
        cardata: car
      });
    });
  }

compare =(product) => {
    var arrayOfProducts = [this.state.products], b={}
    const comparingCars = product
    arrayOfProducts.push(b)

    this.setState({
        products: comparingCars,
        isClicked: true
        })
        
}
  




  render() {
    var carjson = this.state.cardata;

    return (
      <div className="grey lighten-4">
          <p className="compare_title teal-text text-darken-2">Compare Chart</p>
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
              <div className="text">John Doe</div>
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
                <th>{this.state.products.Model}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>PRICE</td>
                <td>{this.state.products.price}</td>
            
            </tr>
            <tr>
                 <td>MPG</td>
                <td>{this.state.products.MPG}</td>
            </tr>
            <tr>
                <td>Seating Capacity</td>
                <td>{this.state.products.seating_capacity}</td>
            </tr>

            <tr>
                 <td>Color</td>
                 <td>{this.state.products.colors}</td>
            </tr>

            <tr>
                <td>Horsepower</td>
                <td>{this.state.products.horsepower}</td>
            </tr>

            <tr>
                <td>Engine</td>
                <td>{this.state.products.engine}</td>
            </tr>
            </tbody>
           

          
        </Table>
        </div>
        </div>
      </div>
    );
  }
}
