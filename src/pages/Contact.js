import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

 const Contact = () => {
    const[name , setName]=useState("");
    const[email , setEmail] = useState("");
    const[mobile , setMobile] = useState("")

    async function sendContact(user){

        try{
      const response = await fetch(`https://ecommerce-react-8ba56-default-rtdb.firebaseio.com/contact.json`,{
        method : "POST",
        body: JSON.stringify(user),
        headers :{
            "Content-Type" : 'application/json'
        }
      })

    const data = await  response.json();
    console.log(data)
        }
        catch(error){
            console.log(error.message)
        }
    }

    const nameChangeHandler=(event)=>{
      setName(event.target.value)
    }

    const emailChangeHandler=(event)=>{
     setEmail(event.target.value)
    }

    const mobileChangeHandler=(event)=>{
     setMobile(event.target.value)
    }

    const submitHandler=(event)=>{
      event.preventDefault();
      const User ={
        name : name,
        email : email,
        mobile : mobile
      }
      sendContact(User)

      console.log(User)
    }

    
  return (
    <Container>
        <h3 className='text-center pt-4'>Contact Us</h3>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control type="text" id='name' placeholder="Enter Name" value={name} onChange={nameChangeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control id='email' type="email" placeholder="Enter Email" value={email} onChange={emailChangeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor='mobile'>Mobile Number</Form.Label>
        <Form.Control id='mobile' type="number" placeholder="Enter Phone Number" value={mobile} onChange={mobileChangeHandler} />
      </Form.Group>
    
      <Button  className='w-100 ps-2 pe-2' variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    </Container>
  )
}

export default Contact
