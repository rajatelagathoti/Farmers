const productList = document.getElementById('productList');
db.collection('products').onSnapshot((snapshot) => {
  productList.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    productList.innerHTML += `
      <div>
        <h3>${data.name}</h3>
        <p>Quantity: ${data.quantity}</p>
        <p>Price: ${data.price}</p>
      </div>
      <hr>
    `;
  });
});
