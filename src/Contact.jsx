import React, {  useState } from 'react'

import  './contact.css'



const Contact = () => {
const module={name:"",phone:"",lname:"",email:"",password:""}
const [Form,setForm]  = useState(module)

const out={name:"",email:"",password:""}

const [Login,setLogin]  = useState(out)
const [Sign,setSign]  = useState("login")
function sign(s) {
   s.preventDefault()
   console.log(Login)
}

function action(d) {
 d.preventDefault()
console.log(Form)
}

function handle(e) {
    setForm({
        ...Form,
       [ e.target.name]:e.target.value
    })
}
function login(par) {
  setLogin({
    ...Login,
    [par.target.name]:par.target.value
  })
}
  return (
    <>


<span>{Form.name}</span>



<div className=' border-2  '>
<h1>{Sign==="login"? "login":"sign up" }</h1>
<span>please fill this form</span>

  <form action="" onSubmit={action}>
    <div className=' flex flex-col  content '>
{ Sign==="login"? <div></div>:  
<div className='flex flex-col' >
<label htmlFor="">first name</label>
<input type="text" name="name"required placeholder='name' onChange={handle} value={Form.name} />
  </div>}
<label htmlFor="">emial</label>
<input type="email" name="email" required placeholder='email' onChange={handle} value={Form.email} />


<label htmlFor="">password</label>
<input type="password" name="password"  required placeholder='password' onChange={handle} value={Form.password} />

<button type="submit" className={Sign==="login" ? "sumbit ":"gray"}  onClick={()=>{setSign("signup")}} >SIGN Up</button>
<button type="submit" className={Sign==="signup" ? "sumbit ":"gray"  }    onClick={()=>{setSign("login")}}>Login</button>
</div>
</form>


</div >
{/*
<label htmlFor="">Last name</label>
<input type="text" name="lname"  required placeholder='lname' onChange={handle} value={Form.lname}  />
*/}
{/*
<div className='Container2 mt-9 border-b-blue-600 bg-amber-900'>
    <form action="" onSubmit={sign}>
<h1 className='font-bold font-serif f'>Login</h1>

    <div className=' flex flex-col  data'>
<label htmlFor=""> Name</label>
<input type="text" name="name"required placeholder='name' onChange={login} value={Login.name} />


<label htmlFor="">Emial</label>
<input type="email" name="email" required placeholder='email'  onChange={login} value={Login.email} />


<label htmlFor="">Password</label>
<input type="password" name="password"  required placeholder='password'  onChange={login} value={Login.password} />



<button type="submit" className='my-6 cursor-pointer'>Login</button>
</div>
</form>
</div>
*/
}


    </>
  )
}

export default Contact
