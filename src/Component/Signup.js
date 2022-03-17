import React,{useState,useEffect} from 'react';



function Signup(){

    const initailValues={username:"",email:"",password:""};
    const [fromvalues,setformvalues]=useState(initailValues);
    const [formerrors,setformErrors]=useState({ });
    const [issubmit , setisdubmit]=useState(false);

    const handlechange =(e)=>{
        const {name,value} = e.target;
        setformvalues({...fromvalues, [name] : value });
    }



    const  handlesubmit = (e)=>{
        e.preventDefault();
        setformErrors(validate(fromvalues));
        setisdubmit(true);
    }

    useEffect(()=>{
        console.log(formerrors);
        if(Object.keys(formerrors).length === 0 && issubmit){
            console.log(fromvalues);
        }
    },[formerrors]);



    const validate = (values)=>{
        const error ={}
        const regEx= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!values.username){
            error.username = "username is required !";
        }
        if(!values.email){
            error.email = "email is required!";
            var img = document.createElement("img");
            img.src=""
        } else if(!regEx.test(values.email)){
            error.email = "email is not valid";
        }
        if(!values.password){
            error.password = "password is required !";
        } else if(values.password.length < 4){
            error.password = "password can not be less than 4 characters"
        }else if(values.password.length > 10){
            error.password = "password can not be more than 10 characters"
        }
        return error;
    }



    return(
        <div className='container_S'>
            
            {/* <pre className='pre_s'>{JSON.stringify(fromvalues,undefined,2)}</pre>  // <pre className='pre_s'>{JSON.stringify(fromvalues,undefined,2)}</pre> */}
            {(Object.keys(formerrors).length === 0 && issubmit) ? <div id='sucess'>WELCOME BACK Mr : {fromvalues.username}  </div> :''  }
            
            <form onSubmit={handlesubmit}  className='form_s' >
            <h2>Login Form</h2>
            <div className='input_group'>
                <p className='title' >Username</p>
                <input type='text' placeholder='username' name='username' value={fromvalues.username}  onChange={handlechange} />

                <p className='error_message'>{formerrors.username}</p>
            </div>
            <div className='input_group'>
                <p className='title' >Email</p>
                <input type='text' placeholder='Email'   name='email'  value={fromvalues.email}   onChange={handlechange} />
                <p className='error_message'>{formerrors.email}</p>
            </div>
            <div className='input_group'>
                <p className='title' >Password</p>
                <input type='password' placeholder='Password'  name='password' value={fromvalues.password} onChange={handlechange} />

                <p className='error_message'>{formerrors.password}</p>
            </div>
            <button type="submit" className='btn' >Submit</button>
            </form>
        </div>
    )
}


export default Signup; 