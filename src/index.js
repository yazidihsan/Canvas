import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    // let table=[]

    // for(let i=15;i<9;i+=40){
    //     let children =[]
    //     for(let j=15;j<9;j+=40){
    //         children.push(()=> {ctx.beginPath()
    //             ctx.arc(i, j, 10, 0, 5 * Math.PI)
    //             ctx.stroke()
    //             ctx.fillStyle="#808080"
    //             ctx.save()
    //         })
    //     }
    //     table.push({children})
    // }
    // return table;
    ctx.beginPath();
    ctx.arc(15, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(55, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(135, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(175, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(255, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(295, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(335, 15, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#808080";
    ctx.fill();

    //     }
    // }

    ctx.beginPath();
    ctx.arc(15, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 55, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 95, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 135, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 175, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 215, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 255, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 295, 10, 0, 5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(135, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(175, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(335, 335, 10, 0, 5 * Math.PI);
    ctx.stroke();
  }
  render() {
    return (
      // <div className="App">
      //   <h1>Hello CodeSandbox</h1>
      //   <h2>Start editing to see some magic happen!</h2>
      // </div>
      <div className="box">
        <canvas ref="canvas" width={320} height={320} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
