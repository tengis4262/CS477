window.onload = function() {
    fetchProducts();
    document.getElementById('submit').onclick = saveProd;
}

async function fetchProducts(){
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();

    let html = `
    <table id="product-table">
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
    `;

    products.forEach(prod => {
        html += `
            <tr id="${prod._id}">
                <td>${prod._id}</td>
                <td id="title-${prod._id}">${prod.title}</td>
                <td id="price-${prod._id}">${prod.price}</td>
                <td id="description-${prod._id}">${prod.description}</td>
                <td>
                    <button onclick="editById('${prod._id}');">Edit</button>
                    <button onclick="deleteById('${prod._id}');">Delete</button>
                </td>
        </tr>
        `
    });
    html += '</table>';
    document.getElementById('products').innerHTML = html;
}

async function saveProd(evt){
    evt.preventDefault();
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const prod = await response.json();
    console.log(prod);
    const html = `
        <tr>
        <td>${prod._id}</td>
        <td>${prod.title}</td>
        <td>${prod.price}</td>
        <td>${prod.description}</td>
    </tr>
    `;

    document.getElementById('product-table').innerHTML += html;
    document.getElementById('product-add-form').reset();
}


async function deleteById(id){
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    document.getElementById(data._id).remove();
}

async function editById(id){
    document.getElementById('product-add-form').style.display = 'none';
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const prod = await response.json();


    let html = `
        <div id="product-edit-form">
            <h1>Edit Product</h1>
            <p>Title: <input id="title2" name="title" value="${prod.title}" /></p>
            <p>Price: <input id="price2" name="price" type="number" min="1" value="${prod.price}" /></p>
            <p>Description: <textarea id="description2">${prod.description}</textarea></p>
            <button id="submit" onclick="updateProd('${prod._id}')">Submit</button>
        </div> 
    `;
    document.getElementById('edit').innerHTML =  html;
}

async function updateProd(id){
    console.log('inside update' + id);
    console.log(document.getElementById('title2').value);
    const title = document.getElementById('title2').value;
    const price = document.getElementById('price2').value;
    const description = document.getElementById('description2').value;
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            price,
            description 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    await response.json();
    document.getElementById(`title-${id}`).innerHTML = title;
    document.getElementById(`price-${id}`).innerHTML = price;
    document.getElementById(`description-${id}`).innerHTML = description;

    // document.getElementById(`${id}`).innerHTML = `
    //     <td>${id}</td>
    //     <td>${title}</td>
    //     <td>${price}</td>
    //     <td>${description}</td>
    //     <td>
    //         <button onclick="editById('${id}');">Edit</button>
    //         <button onclick="deleteById('${id}');">Delete</button>
    //     </td>
    // `;
    document.getElementById('product-add-form').style.display = 'block';
    document.getElementById('product-edit-form').style.display = 'none';
}