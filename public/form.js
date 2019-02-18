var form = document.querySelector('form');
form.addEventListener('submit' ,postData );
function postData(event) {
    event.preventDefault();
    
    var data = {
          Name         : document.getElementById('product-name').value,
          Description  : document.getElementById('product-description').value,
          Price        : document.getElementById('product-price').value,
          Category     : document.getElementById('product-category').value,
          Image        : document.getElementById('product-img').value,
          Color        : document.getElementById('product-colors').value
    }
    console.log("name",JSON.stringify(data.Name))
    console.log(("data",data));
    fetch("https://product-ch-backend.herokuapp.com/product",{
        method:'post',
        headers: {
         "Accept":"application/json,text/plain,*/*", 
         "Content-Type" : "application/json"   
        },
        body: JSON.stringify(data)})
        .then((res)=>{console.log(res.json())}).
        catch((err)=>console.log(err));
}

