
fetch('http://localhost:3000/user?name=lamafif',{
    method:'GET',
    headers: {
        'Content-Type': 'Application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
fetch('http://localhost:3000/user',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body:
    JSON.stringify({ name:"lama", message: "welcome " }), 
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
