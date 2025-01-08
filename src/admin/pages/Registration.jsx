import axios from 'axios';
import React,{useState} from 'react'




function Registration() {

  const[formData , setFormData] = useState({
    username:'',
    email:'',
   
    password:'',

  });

  const [submittedData, setSubmittedData] = useState(null);
  
  const [success, setSuccess] = useState("");
  const [error , setError] = useState("");
  const [edit , setEdit] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await axios.post("http://fastapi.phoneme.in/add_user", formData,{headers:{"Content-Type":'application/json'} , } );
    setSuccess(response.data.message);
   }
   catch(err){
    setError(err.response.data || 'something went wrong' );
  }
  } 

  const handleEdit = () => {
   
    setEdit();

  }
  return (
    <div  style ={{backgroundColor: '#c8eac9', padding:'20px'}}>
      {error && 
      <div style={{color:'red'}}>
        {error}
        </div>}


        {success && 
      <div>
        {success}
        </div>} 
      

      <h2>Registration Form</h2>
      <button onClick={handleEdit}><b>Edit User</b></button>
      <br/>
      <br/>
      <form onSubmit={handleSubmit} style ={{backgroundColor: '#caee9'}}>
      <div style = {{backgroundColor:'#9595e7',padding:'2px'}}>
      <label><b>Username:</b></label>
      <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={handleChange} required />
      <br></br>

      <label><b>Email:</b></label>
      <input type="text" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required />
      <br></br>

     
          <label><b>Password:</b></label>
      <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} id="password" required />
      <br></br>

     
    </div>
    <button type="submit"><b>Submit</b></button>
    </form>
    
    
</div>
  )
}


export default Registration