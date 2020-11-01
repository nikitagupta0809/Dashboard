import React from 'react'
import Table from "./Table";
import Chart from './Chart'

export default class Canvas extends React.Component {

    state = {
        product: this.props.products,
        // chart_data:[1,4,5,7,3],
        width: 800,
        height: 500,
        attr: 'retailSales'
    }
    render() {
            console.log("data:",this.state.product);
        return (
            <div className="canvas-content">
                <div className="chart">
                    {/* <Tab data={this.state.product} width={this.state.width} height={this.state.height}/> */}
                    <p>{this.state.attr}</p>
                    <Chart data={this.state.product} attr={this.state.attr} width={this.state.width} height={this.state.height}/>
                </div>
                <div className="table">
                    <Table data={this.state.product}/>
                </div>
            </div>
        )
    }
}
