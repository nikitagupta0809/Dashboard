import React, { Component } from 'react'
import Chart from "./Chart";
import Table from "./Table";

export default class Canvas extends Component {
    state = {
        product: this.props.products,
        // chart_data:[1,4,5,7,3],
        width: 900,
        height: 500,
        attr: 'retailSales'
    }
    render() {
        console.log("data:",this.state.product);
        return (
            <div className="canvas-content">
                <div className="chart">
                    <Chart data={this.state.product} attr={this.state.attr} width={this.state.width} height={this.state.height}/>
                </div>
                <div className="table">
                    <Table data={this.state.product}/>
                </div>
            </div>
        )
    }
}
