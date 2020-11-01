import React, { Component } from 'react'
import Table from "./Table";
import { Tab }  from '../features/charts/Tab';
import Chart from './Chart'

export default class Canvas extends Component {

    state = {
        product: this.props.products,
        // chart_data:[1,4,5,7,3],
        width: 900,
        height: 500,
        attr: 'unitsSold'
    }
    render() {
        console.log("data:",this.state.product);
        return (
            <div className="canvas-content">
                <div className="chart">
                    <Tab data={this.state.product} width={this.state.width} height={this.state.height}/>
                    <Chart data={this.state.product} attr={this.state.attr} width={this.state.width} height={this.state.height}/>
                </div>
                <div className="table">
                    <Table data={this.state.product}/>
                </div>
            </div>
        )
    }
}
