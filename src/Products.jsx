
import { useEffect, useState } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const Styles = {
  valimage:{
    height: 300
  }

}





let Products = ()=>{
  let url = "https://fakestoreapi.com/products"
  let [data,setdata] = useState([]);
  


  useEffect(()=>{
    axios.get(url).then((val)=>{
      console.log(val.data);
      setdata(val.data)
      
    })
  })

console.log(data)
let Mapp = data.map((val, ind, array)=>{
  
  return(
    <div>

 <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={val.image} style={Styles.valimage}/>
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
          bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </div>
        )
 })

  return(


    <div>
      
      
      <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>{Mapp}</div>

    </div>
  )
}

      
    export default Products;