
    let div_Register=document.getElementById('Register')
    let div_Login = document.getElementById('Login')

    function Register(e){
        e.preventDefault();

        let formdata={
            name:document.getElementById('inp1').value,
            email: document.getElementById('inp2').value,
            password: document.getElementById('inp3').value,
            username: document.getElementById('inp4').value,
           mobile: document.getElementById('inp5').value,
            description: document.getElementById('inp6').value,
        };
        formdata=JSON.stringify(formdata);
        
        fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

             method: 'post',
            body: formdata,
            //additional information
            headers: {
                "Content-Type":"application/json",
            },
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            console.log(res.error)
            if (res.error == false) {
                div_Register.style.display = "none";
                div_Login.style.display = 'block';
            }
           


        })
        .catch((err)=>{
            console.log(err);
        })

    }

    function Login(e){
        e.preventDefault();

        let formdata={
            password:document.getElementById('inp8').value,

            username:document.getElementById('inp7').value

        }
        let body= JSON.stringify(formdata);
        fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
            method:'post',
            body: body,
            headers:{
                "content-Type":"application/json"

            },
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            window.location.href="google.html"
            
            
           // let u=formdata.username
           // let t=res.token

           // getmyProfile(u,t);
        })
        .catch((err)=>{
            console.log(err);
        })


    }
 
    function getmyProfile(username,token){
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

            headers:{
                'Authorization': `Bearer ${token} `
            }

        })
        .then((res) => {
                return res.json();

        })
        .then((res) => {
                console.log('res',res)

        })
        .catch((err) => {
                console.log(err);
            });


    }

