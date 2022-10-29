//rfc (to get the below code i.e function component)
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

//rce (to get class component)
import React, { Component } from 'react'

export class Card extends Component {
  constructor (props)
{
  super(props)
  this.state = {
    showImage:true,
    inCart:0
  }
};
  render() {
    const{_id,desc,url,productName}=this.props.values;
    // this.state={
    //     btnText: "Buy "+_id,
    //     showImage: true, //this is for making the card disable when content fot the card is not added on the API 
    // }
    const handleClick = () =>{
      this.setState(
        {
          showImage :false,
        }
      );
      // console.log('hit')
    }

    const handleAdd=()=>{
      // doing changes from current state 
      this.setState((state)=>{
        return{
          // ... -> spread object
          ...state,
          inCart: state.inCart +1
        }
      })
    }

    return (
        <div class="card">
          {!this.state.showImage?(
            <img src={url} class="card-img-top img-flex" alt="..."/>
          ):(
            <h1>Hello</h1>
          )}
            <div class="card-body">
              <h5 class="card-title">{productName}</h5>
              <p class="card-text">{desc}</p>
              <button class="btn btn-primary" onClick={handleClick}>{this.state.btnText}Press to show Image</button>
              <br/><br/>
              <button className='btn btn-info' onClick={handleAdd}>
                {this.state.inCart==0?"Add to Cart":`${this.state.inCart} added, press to add more`}
                {/* `` are used to add value in string  */}
              </button>
            </div> 
          </div>
    )
  }
}

export default Card