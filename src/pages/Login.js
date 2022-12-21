import React ,{useState , useRef , useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import CartContext from '../store/cart-context';
import CartProvider from '../store/CartProvider';
import { useHistory } from 'react-router-dom';

 const Login = () => {
  const history =useHistory();
    const authCtx = useContext(CartContext)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    console.log(authCtx.isLoggedIn)

    const[isLogin , setIsLogin]=useState(true)

    const switchAuthModeHandler=()=>{
        setIsLogin((prev)=>!prev)
    }

    const submitHandler=(event)=>{
     event.preventDefault();

     const enteredEmail =  emailInputRef.current.value
     const enteredPassword = passwordInputRef.current.value
    let url =""
     if(isLogin){
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBv9CNrzggTkfoSNKo7_3W4PheJjP1tVes"
     }else{
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBv9CNrzggTkfoSNKo7_3W4PheJjP1tVes"
     }

     fetch(url , {
        method:'POST',
        body : JSON.stringify({
            email: enteredEmail,
            password : enteredPassword,
            returnSecureToken : true
        }),
        headers : {'Content-Type' : 'application/json'},
     }).then(res =>{
        return res.json();
     }).then(data=>{
        if(isLogin){
            console.log("Login Completed")
            //console.log(data.idToken)
            localStorage.setItem('email' ,enteredEmail )
            authCtx.login(data.idToken)
            history.replace('/store')
            alert("Log In Successful")
        }else{
             console.log("Sign up Completed")
             alert("Sign Up Successful")
             
        }
     }).catch(err=>{
        alert(err.message)
        history.replace("/")
     })


    }
  return (
    <Container className='pt-5'>
    <Form onSubmit={submitHandler} className='pt-3'>
        <h1 className='text-center'>{isLogin ? 'Log In' : "Sign Up"}</h1>
      <Form.Group  className="mb-3">
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control ref={emailInputRef} id='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control ref={passwordInputRef} id='password' type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        {isLogin ? 'Log In' : "Sign Up"}
      </Button>
      <div className='text-center pt-3'>
      <button type='button' onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
      </div>
    </Form>
    </Container>
  )
}

export default Login
