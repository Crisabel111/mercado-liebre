const userAction = async () => {
    const response = await fetch('http://localhost:3030/user/total-usuarios');
    const myJson = await response.json(); //extract JSON from the http 
    document.getElementById("totalUsuarios").innerHTML = myJson.data
  }

userAction();



