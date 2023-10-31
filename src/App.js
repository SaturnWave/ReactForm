import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() 
{
 const[shop,setShop]=React.useState({name:"",description:""});
 const[product,setProduct]=React.useState({name:"",description:"",category:"",quantity:"",price:""});

 const handleShopChange=(e)=>
 {
   setShop({...shop,[e.target.name]:e.target.value});
 }
 const handleProductChange=(e)=>
 {
   setProduct({...product,[e.target.name]:e.target.value});
 }
 const handleShopSubmit=(e)=>
 {
   e.preventDefault();
   console.log('Shop details',shop);
 }
 const handleProductSubmit=(e)=>
 {
   e.preventDefault();
   console.log('Product details',product);
 };
 
 return(
    <div className='container'>
  <div id="App">
    {/* Shop Form */}
    <h2>New Shop</h2>
    <form onSubmit={handleShopSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleShopChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" onChange={handleShopChange}></textarea>
      </label>
      <br />
      <button type="submit">SUBMIT</button>
      <button type="button">CANCEL</button>
    </form>
  </div>

  <div id="App1">
    {/* Product Form */}
    <h2>New Product</h2>
    <form onSubmit={handleProductSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleProductChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" onChange={handleProductChange}></textarea>
      </label>
      <br />
      <label>
        Category:
        <select name="category" onChange={handleProductChange}>
          <option value="Electronics">Electronics</option>
          <option value="Grocery">Grocery</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" name="quantity" min="0" onChange={handleProductChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" min="0.01" onChange={handleProductChange} />
      </label>
      <br />
      <button type="submit">SUBMIT</button>
      <button type="button">CANCEL</button>
    </form>
  </div>
</div>


 );
}

export default App;

// echo "# ReactForm" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SaturnWave/ReactForm.git
// git push -u origin main
//https://github.com/SaturnWave/ReactForm.git
