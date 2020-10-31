import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div>
                    {this.props.products.map((product)=>(
                    <div>
                        <div className="prod-intro">
                            <img src={product.image} alt={product.title} className="prod-img"></img>
                            <p><b>{product.title}</b></p>
                            <p className="subtitle">{product.subtitle}</p>
                        </div>
                        <ul className="tags">
                            {product.tags.map(item => 
                                <li key={item}>
                                    <button className="button button-primary">{item}</button>
                                </li>)}
                        </ul>
                        <div className="tabs">
                            <button className="tab">
                                <img src="/home.svg" height="20px" width="20px" alt="home icon" className="icon"></img>  
                                    OVERVIEW</button>
                            <button className="tab">
                            <img src="/sales.svg" height="20px" width="20px" alt="sales icon" className="icon"></img>   
                                    SALES</button>
                        </div>  
                    </div>
                    ))}
            </div>
        )
    }
}
