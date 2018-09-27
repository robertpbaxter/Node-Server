const fetchHelloDataFromAPI=()=>{
    fetch('http://localhost:3000/test/helloclient', {
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
    .then(response =>{
        console.log('Fetch response:',response)
        return response.text()
    })
    .then(text=> console.log(text))
}


const postToOne=()=>{
    const url='http://localhost:3000/test/one'
    
    fetch(url,{
        method: 'POST',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
    .then(response=>response.text())
    .catch(error=>console.error('Error:', error))
    .then(response=>console.log('Success:',response))
}

const postToOneArrow=()=>{
    const url='http://localhost:3000/test/one'
    fetch(url,{
        method:'POST',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
    .then(res=>res.text())
    .catch(error=>console.error('Error:',error))
    .then(response=>console.log('Success:',response))
}
