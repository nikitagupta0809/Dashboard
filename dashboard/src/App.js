import React from 'react';
import Canvas from "./components/Canvas";
import SideBar from "./components/SideBar";
import data from "./components/Webdev_data2.json";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: data.products
    };
  }
  render(){

    
    return (
      <div className="grid-container">
        <header>
          <a href="/">
            <img src="/logo.png" alt="company-logo" className="brand-logo"/> 
          </a>
        </header>
        <main>
          <div className="sidebar">
            <SideBar products={this.state.products}/>
          </div>
          <div className="canvas">
            <Canvas products={this.state.products}/>
          </div>
        </main>
      </div>

    );
    }
  }
export default App;
