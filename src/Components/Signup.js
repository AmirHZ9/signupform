import React , {useState , useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validate} from './validate' 
import {notify} from './toastify';
function Signup() {

    const [data, setData] = useState({
        name:'',
        email:'',
        password:"",
        confirmpassword:'',
        isAccept:false
    })
    const [errors , setErrors] = useState({});
    const [touched, setTouched]=useState({})

        useEffect(() =>{
        
            setErrors(validate(data))
            console.log(errors)
        },[data,touched])


    const changehandler = event => {
        if(event.target.name === "isAccept"){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data, [event.target.name]:event.target.value})
        }
    }
    const focushandler = event =>{
    setTouched({...touched, [event.target.name]:true})
    }
    const submithandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify('successfull' , 'success')
        }else{
            notify('error')
            setTouched({
                 name:true,
            email:true,
            password:true,
            confirmpassword:true,
            isAccept:false
            })
        }
    }
    

    return (
        <div>
            <form>
            <h1>Signup</h1>
            <div>
                <label>Name</label>
                <input type="text" name='name' value={data.name} onChange={changehandler} onFocus={focushandler}/>
                {errors.name && touched.name && <span>{errors.name}</span> }
            </div>
            <div>
                <label>Email</label>
                <input type="email" name='email' value={data.email} onChange={changehandler} onFocus={focushandler}/>
                {errors.email && touched.email && <span>{errors.email}</span> }
            </div>
            <div>
                <label>Password</label>
                <input  type="password" name='password' value={data.password} onChange={changehandler} onFocus={focushandler}/>
                {errors.password && touched.password && <span>{errors.password}</span> }
            </div>
            <div>
                <label>Password</label>
                <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changehandler} onFocus={focushandler}/>
                {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span> }
            </div>
            <div>
                <label>I accept privacy and policy</label>
                <input type="checkbox" name='isAccept' value={data.isAccept} onChange={changehandler} onFocus={focushandler}/>
                {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span> }
                <div>
                    <button onClick={submithandler}>Submit</button>
                </div>
            </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup
