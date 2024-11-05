import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const[username,usernameUpdate]=useState('');
    const[password,passwordUpdate]=useState('');
    const proceedLogin =(e)=>{
        e.preventDefault();
        if(validate()){

            // implement
            // console.log('proceed');
            fetch("  http://localhost:3000/users/"+username)
            .then((res)=>{
                return res.json();

            }).then((resp)=>{


                
                console.log(resp);

            }).catch((err)=>{
                alert('login failed due to :'+err.message);
            });
        }

    }
    
    const validate=()=>{
        let result=true;
        if (username ===''|| username===null){
            result=false;
        alert('please enter username')
        }

        if (password ===''|| password===null){
            result=false;
            alert('please enter password')
        }
        return result;
    }

  return (
    <div className='row'>

    <div className="offset-lg-3 col-lg-6">
        <form onSubmit={proceedLogin} className='container'>
            <div className='card'>
                <div className="card-header">
                    <h2>user Login</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>user name <span className="errmsg"></span></label>
                        <input value={username} onChange={e=> usernameUpdate(e.target.value)} className="form-control"></input>
                    </div>
                  
                    <div className="form-group">
                        <label>password <span className="errmsg"></span></label>
                        <input type='password'  value={password} onChange={e=> passwordUpdate(e.target.value)} className="form-control"></input>
                    </div>



                </div>
                <div className="card-footer">
                    <button type="submit" className='btn btn-primary'>Login</button>
                    <Link className="btn btn-success ms-2" to={'/register'}> New User</Link>

                </div>
            </div>
        </form>

    </div>


    </div>

  )
}

export default Login