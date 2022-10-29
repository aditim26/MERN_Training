
import './App.css';
import Card from "./Components/Card";
import UserCard from './Components/UserCard';

// data is an array and it will become object inside an array 
const data = [
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random 1",
    _id:1,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random 2",
    _id:2,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random 3",
    _id:3,
    desc: "Lorem bggjmgj",
  },
  {
    url:"https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    productName: "Random 4",
    _id:4,
    desc: "Lorem bggjmgj",
  },
];

const userData = [{
    name:"Aditi Mittal",
    age:20,
    designation:"software engineer",
    url:"https://th.bing.com/th/id/OIP.AUh4yuxM2DQGfoazTo1XnQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    name:"Aparna Mittal",
    age:20,
    designation:"software engineer",
    url:"https://th.bing.com/th/id/OIP.AUh4yuxM2DQGfoazTo1XnQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    name:"Tanvi",
    age:20,
    designation:"software engineer",
    url:""
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
      <div className='row'>
      {
          userData.map((val)=>{
            return (<div className='col-12 col-sm-6 col-md-3'>
              <UserCard {...val}/>
              </div>)
          })
        }
      </div>
    </div>

  );
}

export default App;
