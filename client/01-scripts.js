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

const postData=()=>{
    let content={testdata:{item:'This was saved!'}}

    let testDataAfterFetch = document.getElementById('test-data')
    let createdAtAfterFetch = document.getElementById('created-at')

    fetch('http://localhost:3000/test/seven',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(response=>response.json())
    .then(function(text){
        console.log(text)
        testDataAfterFetch.innerHTML=text.input.testdata
        createdAtAfterFetch.innerHTML=text.input.createdAt
    })
}

//4 GET FROM /ONE - Display Data
const fetchFromOneDisplayData=()=>{
    let url='http://localhost:3000/test/one'
    let dataView = document.getElementById('display-one')

    fetch(url,{
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }).then(
        response=>response.json()
    ).catch(
        error=>console.log('Error:',error)
    ).then(
        results=>{
            let myList = document.querySelector('#getjson')

            for (r of results){
                console.log('Response:',r.testdata)
                let listItem=document.createElement('li')
                listItem.innerHTML=r.testdata
                myList.appendChild(listItem)
            }
        }
    )
}