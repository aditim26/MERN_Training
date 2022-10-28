
import './App.css';
import Card from "./Components/Card";

// data is an array and it will become object inside an array 
const data = [
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random",
    _id:1,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random",
    _id:2,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random",
    _id:3,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random",
    _id:4,
    desc: "Lorem bggjmgj",
  },
];


function App() {
  const title = "hey...";
  return(
    <div className='Container'>
      {/* we use curly brackets to write variable name */}
      <h1>{title}</h1>
      <br/>
      <div className='row'>
        {
          data.map((val, i) => {
            return (
              <div className='col-6 col-sm-4 col-md-3'>
              <Card values={val} />
              </div>
            ); 
          })
        }

        {/* <div className='col-6 col-sm-4 col-md-3'>
          <Card />
        </div>

        <div className='col-6 col-sm-4 col-md-3'>
          <Card />
        </div>

        <div className='col-6 col-sm-4 col-md-3'>
          <Card />
        </div>

        <div className='col-6 col-sm-4 col-md-3'>
          <Card />
        </div> */}

      </div>
    </div>

  );
}

export default App;
