
// import axios from "axios"
import "./Loginpage.css";



let Login=()=>{
    

    return(
     <div className="container2">
      <div className="app-wrapper1">
        <form action="" id="form-wrapper1" onSubmit={(e)=>{

            e.preventDefault()
    console.log(e)
    // validate()

let eid = e.target[0].value;
let pass = e.target[1].value;
// axios.get("http://localhost:3000/posts").then((val)=>{
//     console.log(val.data)



console.log(eid, " ", pass)



if(eid.match(/[@gmail.com]$/)){
    if(pass.match(/^[A-Z]/)){
        if(pass.length == 8){
            alert("login successfull")
            
                            
            window.location.href = "./Totalresume"
        }else{
            document.getElementById('errormessage').innerHTML  = "password must be 8 characters"
        }

    }else{
        document.getElementById('errormessage').innerHTML  = "password not matched";

    }
}
else{
    document.getElementById('errormessage').innerHTML = "not matched"
}

}



}>


<h1 id = "header">Login</h1>
<div className="email1">
        <input id="email-id"
            type="text"
            name="email"
            placeholder="Email-id" required /></div>
        <div className="password1">
        <input id="password"
            type="password"
            name="password"
            placeholder="Password" required/><br/>
            </div>
            
        
        <button id="submit1">Submit</button>
        <span id="errormessage"></span>
        
       
    
        </form>
        </div></div>
        

    )
         
            
           


}

export default Login;

    