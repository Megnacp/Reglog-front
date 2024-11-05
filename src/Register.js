import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const [id,idchange] = useState("");
const [name,namechange]= useState("");
const [password,passwordchange]= useState("");
const [email,emailchange]= useState("");
const [phone,phonechange]= useState("");
const [country,countrychange]= useState("");
const [address,addresschange]= useState("");
const [gender,genderchange]= useState("others");

const navigate=useNavigate();
const IsValidate=()=>{
  let isproceed=true;
  let errormessage='please enter the value in';
  if(id === null || id === ''){
    isproceed=false;
    errormessage +='username';
  }

  if(id === null || name === ''){
    isproceed=false;
    errormessage +='Fullname';
  }

  if(id === null || password === ''){
    isproceed=false;
    errormessage +='password';
  }

  if(id === null || email === ''){
    isproceed=false;
    errormessage +='email';
  }
  

  if(!isproceed){
    
    alert(errormessage)
  }else{
    if(/^[a-zA-Z]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email)){

    }else{
      isproceed=false;
      alert('please enter the valid email')
    }
  }
  return isproceed;
}

  const handlesubmit=(e)=>{

  
    e.preventDefault();
   

    let regobj={id,name,password,email,phone,country,address,gender};
    if (IsValidate()){
    console.log(regobj);
    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res)=>{
     alert('registered successfully')
     navigate('/login')
    }).catch((err)=>{
      alert('failed:'+err.message);

    });
  }

  }
  return (
    <div>

   <div className='offset-lg-3 col-lg-6'> 
   <form className='container' onSubmit={handlesubmit}>
    <div className="card">
      <div className="card-header">
     <h1>new registerstion</h1>
</div>



      <div className="card-body">
           <div className='row'>

            <div className="col-lg-6">
              <div className="form-group">
                <label> user name <span className="errmsg">*</span></label>
                <input  value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
              </div>
                </div>
                
            <div className="col-lg-6">
              <div className="form-group">
                <label> password <span className="errmsg">*</span></label>
                <input  value={password} onChange={e=>passwordchange(e.target.value)} type='password' className="form-control"></input>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label> full name <span className="errmsg">*</span></label>
                <input  value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label> email<span className="errmsg">*</span></label>
                <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label> phone number <span className="errmsg">*</span></label>
                <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label> country <span className="errmsg">*</span></label>
               <select  value={country} onChange={e=>countrychange(e.target.value)} className="form-control">
                <option value="india">India</option>
                <option value="usa">Usa</option>
                <option value="japan">Jappan</option>
               </select>
              </div>

            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label> address </label>
                <textarea  value={address} onChange={e=>addresschange(e.target.value)} className="form-control"></textarea>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label>Gender</label>
                <br></br>
                <input type="radio"  checked={gender==='male'} onChange={e=>genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                <label>Male</label>
                <input type="radio"   checked={gender==='female'} onChange={e=>genderchange(e.target.value)} name="gender"value="female" className="app-check"></input>
                <label>Female</label>
                </div>

            </div>
                 </div>

        <div className='card-footer'>
         <button type="submit" className="btn btn-primary">Register</button>
         <a className="btn btn-danger ms-2">Go back</a>

        </div>
        </div>
    </div>
   </form>
   
   </div>

    </div>
  )
}

export default Register