window.onload = function () {
    fetchProducts();
    document.getElementById('submit').onclick = saveProd;
}

async function fetchProducts() {
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
            <tr id = "${prod._id}">
                <td>${prod._id}</td>
                <td>${prod.title}</td>
                <td>${prod.price}</td>
                <td>${prod.description}</td>
                <td><button onclick="deleteById('${prod._id}')">Delete</button>
                    <button onclick="deleteById('${prod._id}')">Edit</button>
                </td>
             </tr>
        `
    });
    html += `</table>`;

    document.getElementById('products').innerHTML = html;
}


async function saveProd(evt) {
    evt.preventDefault();
    console.log('-----------')
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
    })
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
}

async function deleteById(id) {
    console.log(id)

    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();

    console.log(data)
    document.getElementById(data._id).remove();
}