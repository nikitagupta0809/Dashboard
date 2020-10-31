import React, { Component } from 'react'
import  {formatCurrency,  formatDate} from './utils';

export default class Table extends Component {
    
    render() {
        //console.log(formatCurrency(1234455));
        const data = this.props.data;
        let rows  = data[0]['sales']
        console.log("data in table", rows)
        return (
            <div>
                <table className="table-struct">
                    <thead className="row">
                        <th className="col">WEEK ENDING</th>
                        <th className="col">RETAIL SALES</th>
                        <th className="col">WHOLESALE SALES</th>
                        <th className="col">UNITS SOLD</th>
                        <th className="col">RETAILER MARGIN</th>
                    </thead>
                    <tbody>
                        {rows.map(item => {
                            // console.log(item)
                        return (
                        <tr className="row">
                            <td className="col">{formatDate(item['weekEnding'])}</td>
                            <td className="col">{formatCurrency(item['retailSales'])}</td>
                            <td className="col">{formatCurrency(item['wholesaleSales'])}</td>
                            <td className="col">{item['unitsSold']}</td>
                            <td className="col">{formatCurrency(item['retailerMargin'])}</td>
                        </tr>
                        )
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}
