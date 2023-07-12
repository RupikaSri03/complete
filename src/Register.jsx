import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import './Register.css'






let  Register=()=>{
    

    
    return(
        <form action="" id="register1" onSubmit={(e)=>{

            e.preventDefault()
            console.log(e)
        
        let fn = e.target[0].value;
        let  ln= e.target[1].value;
        let  emid= e.target[2].value;
        let  cnemid= e.target[3].value;
        let  pw= e.target[4].value;
        let  cnpw= e.target[5].value;
        
        
        console.log(fn, " ",ln, " ", emid, " ", cnemid, " ", pw, " ", cnpw)
        
        if(fn.match(/^[A-Z]/)){
            if(ln.match(/^[A-Z]/)){
                if(emid.match(/[@gmail.com]$/)){
                    if(cnemid == emid){
                        if(pw.match(/^[A-Z]/)){
                            if(pw.length == 8){
        
                                if(cnpw == pw){
                                    document.getElementById('error').innerHTML = "login successfull"
                                    window.location.href = "/Loginpage";
                                    let details = {FirstName:fn, LastName:ln, Emailid:emid, password:pw}
                                    
                                    
                                    // options = {
                                    //     method:"POST",
                                    //     body:JSON.stringify(details),
                                    //     headers:{
                                    //         "Content-type":"application/json"
                                    //     }
                                        
                                        
                                    // }
                                    let options = details
                                    axios.post("http://localhost:3000/posts",options).then((val)=>console.log(val))
                                    
                                    
                                    
                                }
                                
                                else{
                                    document.getElementById('error').innerHTML = "confirm your password"
        
                                }
        
                            }else{
                                document.getElementById('error').innerHTML = "password must be 8 characters"
                            }
        
                        }else{
                            document.getElementById('error').innerHTML = "password is required"
                        }
        
                    }
                    else{
                        document.getElementById('error').innerHTML = "confirm email id"
                    }
        
                }else{
                    document.getElementById('error').innerHTML = "email is required"
                }
        
            }else{
                document.getElementById('error').innerHTML = "last name is required"
            }
            
        }else{
            document.getElementById('error').innerHTML = "First name is required"
        }
            
        }}>

        <div id = "div1">
        <div>

        <h1>Registration form</h1>
        </div>
        <input id = "firstname" type="text" name="username" placeholder="Enter First Name" required /><br />
        
        <input id = "lastname" type="text" name="username" placeholder="Enter Last Name" required /><br />
        
        <input id="email-id" type="text" name="email" placeholder="Email-id" required /><br />
        
        <input id="confrmemail" type="text" name="email" placeholder="Confirm Email-id" required /><br />
        
        <input id="password" type="password" name="password" placeholder="Password" /><br />
        
        <input id="confrmpass" type="password" name="password" placeholder="confirm Password" /><br />
    
        <input type="checkbox" id="checkbox" name="checkbox" required />
        <label for=""> I Agree to the Term and Condition</label><br />
    
        

        
        <button id="rebtn">Resgister</button>
        
        <p>Already have an account? Login<button id = "rebtn" onClick={() => window.location.href='./Loginpage'} >LOGIN</button></p>
        <span id="error"></span>
        </div>
    </form>
        
    )

}

export default Register;