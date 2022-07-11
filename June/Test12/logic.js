function change(){
    document.getElementById("mydetails").style.display = "none"
fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedData)=>{
    let data1 =""
    completedData.map((curVal)=>{
       data1=`
       <div class="container">
    <div class="card">
        
        <div class="card-body">
          <h5 class="card-title">${curVal.name}</h5>
          <p class="card-text">${curVal.address.city} , ${curVal.website}</p>
          <p class="card-text">${curVal.email}</p>
        </div>
      </div>
</div>
       `
    }); 
    document.getElementById("cards").innerHTML =  data1
})

}