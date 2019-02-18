var products;
fetch('https://product-ch-backend.herokuapp.com/Products').then(function(res){
    return res.json();
}).then(function(data){
    products = data;
    console.log("initial product" , products.data)
    console.log("length of product",products.data.length);
    var main = document.querySelector('main')
    if (products.data.length === 0) {
        var paragraph = document.createElement('p');
        paragraph.textContent = "Ooops,No Products to Display!"
        main.appendChild(paragraph);
    }
    else {
        for (var i = 0;i<products.data.length;i++) {
            productId = products.data[i]._id;
            var section = document.createElement('section');
            var rowDiv  = document.createElement('div');
            var colDiv  = document.createElement('div');
            var cardDiv = document.createElement('div');
            var heading = document.createElement('h1');
            var head2   = document.createElement('h3');
            var para1   = document.createElement('p');
            var para2   = document.createElement('p');
            var image   = new Image(150,150)

            section.setAttribute("class" , "products");
            rowDiv.setAttribute('class' , 'row');
            colDiv.setAttribute('class', 'column');
            cardDiv.setAttribute('class' , 'card');

            heading.textContent = products.data[i].Name;
            head2.textContent   = 'Category:' + products.data[i].Category
            para1.textContent   = products.data[i].Description;
            para2.textContent   = products.data[i].Price
            image.src           = products.data[i].Image
            image.alt           = products.data[i].Name;
            para1.setAttribute('class' , "Description");
            para2.setAttribute('class' , "Price");
        

            main.appendChild(rowDiv);
        
            rowDiv.appendChild(colDiv);
            colDiv.appendChild(cardDiv);

            cardDiv.appendChild(image);
            cardDiv.appendChild(heading);
            cardDiv.appendChild(para2);
            cardDiv.appendChild(para1);
            
            cardDiv.addEventListener("click",showDetails)
            function showDetails(event){
                event.preventDefault();
                window.location.assign(`https://product-ch-frontend.herokuapp.com/product?id=${productId}`)

            }
            
           
        }
    }
}).catch(function(err){
    console.log(err.message);
})

