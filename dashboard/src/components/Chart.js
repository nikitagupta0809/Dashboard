import React, { Component } from 'react'
import * as d3 from "d3";

export default class Chart extends Component {
    componentDidMount() {
        this.drawChart();
      }
      drawChart() {
        const data = this.props.data;
        const attr = this.props.attr;

        const height = this.props.height;
        const width = this.props.width;
        console.log("attr"+attr)
        const sales = data[0].sales;
        const arr= [], time =[];
        for(let i = 0; i < sales.length; i++){
          arr.push(sales[i][attr]);
          time.push(sales[i]['weekEnding'])
        }

        var margin = {top: 15, right: 0, bottom: 40, left: 0};

        var h =  height - margin.top - margin.bottom;
        var w = width - margin.left - margin.right;

        const svg = d3.selectAll(".chart").append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("margin-left", 100);
                      
        let x_months = ['JAN', "FEB", 'MAR', 'APR', 'MAY','JUN','JUL','AUG','SEP', 'OCT', 'NOV', 'DEC']
        // Add X axis --> it is a date format
        var x = d3.scaleTime()
                  .domain([1,12])
                  .range([ 10, w-10]);
        svg.append("g")
        .attr("transform", "translate(0," + (h-40) + ")")
        .attr("class", "ticks")

        .call(d3.axisBottom(x).ticks(8).tickFormat(function(d, i) {  return x_months[i]})//tickformat 
      );
      let maximum = d3.max(arr)
      // let max_us_avg = d3.max(us_avg)
      // let maximum = Math.max(max_data, max_us_avg)
        // Add Y axis
        var y = d3.scaleLinear()
        .domain([0, maximum])
        .range([ h, 0 ]);
        // svg.append("g")
        // .attr("transform", "translate(20,0)")
        // .call(d3.axisLeft(y).ticks(5));

        svg.append("path")
          .datum(arr)
          .attr("fill", "none")
          .attr("stroke", "#91B4ED")
          .attr("stroke-width", 4)
          .attr("d", d3.line()
            .x(function(d,i) { return x(i) })
            .y(function(d,i) { return y(d) })
            )
      }
            
      render(){
        return <div></div>
      }
    }
        

