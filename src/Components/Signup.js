import React , {useState} from 'react'

function Signup() {

    const [data, setData] = useState({
        name:'',
        email:'',
        password:"",
        confirmpassword:'',
        isAccept:false
    })
    const changehandler = event => {
        setData({...data, [event.target.name]:event.target.value})
    }
    return (
        <div>
            <h1>Signup</h1>
            <div>
                <label>Name</label>
                <input type="text" name='name' value={data.name} onChange={changehandler}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name='email' value={data.email} onChange={changehandler}/>
            </div>
            <div>
                <label>Password</label>
                <input  type="password" name='password' value={data.password} onChange={changehandler}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changehandler}/>
            </div>
            <div>
                <label>I accept privacy and policy</label>
                <input type="checkbox" name='isAccept' value={data.isAccept} onChange={changehandler}/>
            </div>
        </div>
    )
}

export default Signup
