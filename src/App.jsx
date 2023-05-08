import './App.css'

function App() {

  const handleAddUser = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name, email}

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data =>{

      if(data.insertedId){
        alert("User added successfully")
        console.log(data);
        form.reset()
      }
    })
  }

  return (
    <>
      
      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" placeholder='Name'/>
        <br />
        <input type="email" name="email" id="email" placeholder='Name'/>
        <br />
        <input type="submit" value='Add user'/>
      </form>
      
    </>
  )
}

export default App
