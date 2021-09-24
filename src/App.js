import logo from './logo.svg';
import './App.css';

function App() {
 /*
   const cinemas=[
    {nayok:"kuber", naika:"kopila"},
    {nayok:"rubel", naika:"Moushumi"},

    {nayok:"Razzak", naika:"Kobori"}
  ]

 */
const products=[
  {name:"laptop", price: 56000},
  {name:"Desktop", price: 36000},
  {name:"Camera", price: 166000},
  {name:"Tv", price: 45000},
  {name:"hitter", price: 25000}
]
  return (
    <div className="App">
     
   {
     products.map(product=> <Product name={product.name}  price={product.price}></Product>)
   }




      
    </div>
    
        /*
                   <Friend name="Fatema" id="181-15-1710"></Friend>
                    <Friend name="Dhiman" id="181-15-1851"></Friend>
                    <Friend name="Rashed" id="181-15-1710"></Friend>
            <div >
               {
                  cinemas.map(cinema=><Cinema nayok={cinema.nayok}  naika={cinema.naika}></Cinema>)
                }
        </div>
        */
  );
}

function Product(prop){
  return(
    <div className="friend">
        <h3>Name:{prop.name}</h3>
        <h7>Price:{prop.price}</h7>
    </div>
  )
}
/*

function Friend(prop){
  console.log(prop);

    const friendStyle={
  backgroundColor:"blue",
  color:"white",
  border:"3px solid black",
  width:"1000px",
  margin:"auto"

}



  return(
    <div style={{
      backgroundColor:"blue",
      color:"white",
      border:"3px solid black",
      width:"1000px",
      margin:"auto"
    
    }}>
       <h1>My name is : {prop.name}</h1>
       <p>My ID : {prop.id}</p>
    </div>

  );
}


  function Cinema(props){
  console.log(props);
  return(
    <div className="Jotey">
      <h2>Nayok:{props.nayok}</h2>
      <h4>Naika:{props.naika}</h4>
    </div>
  )
}

*/

export default App;





/*
function Jotey(prop){
  const jotey={
    backgroundColor:"red",
    color:"white",
    padding:"10px",
    margin:"10px",
    border:"4px solid blue",
    borderRadius:"10px"
  }
  return (
    <div style={{
      backgroundColor:"blue",
      color:"white",
      padding:"10px",
      margin:"10px",
      border:"4px solid red",
      borderRadius:"10px"
    }}>
      <h1>I am {prop.name}</h1>
      <h4>Profession: {prop.job}</h4>
    </div>
  ) 
}
*/
