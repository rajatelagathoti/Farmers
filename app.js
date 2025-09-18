// Firebase config from Step 2
const firebaseConfig = { /* YOUR CONFIG */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add product
document.getElementById('productForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;

  db.collection('products').add({ name, quantity, price })
    .then(() => {
      document.getElementById('message').innerText = "Product Added Successfully!";
      document.getElementById('productForm').reset();
    })
    .catch(err => console.error(err));
});
