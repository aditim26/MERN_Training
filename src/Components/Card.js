// import React from 'react'

// export default function Card(props) {
//     console.log(props.values)
//     // prop destructuring 
//     const{_id,desc,url,productName}=props.values;
//   return (
// //     <div class="card">
// //     <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" 
// //     class="card-img-top" alt="..." />
// //     <div class="card-body">
// //       <h5 class="card-title">{props.values.productName}</h5>
// //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //       <button class="btn btn-primary">Go somewhere</button>
// //     </div>
// //   </div>
// <div class="card">
//     <img src={url}
//     class="card-img-top" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">{productName}</h5>
//       <p class="card-text">{desc}</p>
//       <button class="btn btn-primary">Go somewhere</button>
//     </div>
//   </div>
//   )
// }
import React, { Component } from 'react'

export class Card extends Component {
  render() {
    const{_id,desc,url,productName}=this.props.values;
    this.state={
        btnText: "Buy "+_id,
    }
    return (
        <div class="card">
           <img src={url}
            class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{productName}</h5>
              <p class="card-text">{desc}</p>
              <button class="btn btn-primary">{this.state.btnText}</button>
            </div>
          </div>
    )
  }
}

export default Card