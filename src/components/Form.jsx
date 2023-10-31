import React, { useState } from "react";

export default function ShopProductForm() {
    const [shopName, setShopName] = useState("");
    const [shopDescription, setShopDescription] = useState("");

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");

    function handleShopSubmit(event) {
        event.preventDefault();
        alert("Shop information submitted!");
        console.log("Shop Name:", shopName);
        console.log("Shop Description:", shopDescription);
    }

    function handleProductSubmit(event) {
        event.preventDefault();
        alert("Product information submitted!");
        console.log("Product Name:", productName);
        console.log("Product Description:", productDescription);
        console.log("Product Category:", productCategory);
        console.log("Product Quantity:", productQuantity);
        console.log("Product Price:", productPrice);
    }

    function handleShopCancel() {
        setShopName("");
        setShopDescription("");
    }

    function handleProductCancel() {
        setProductName("");
        setProductDescription("");
        setProductCategory("");
        setProductQuantity("");
        setProductPrice("");
    }

    return (
        <div>
            <form onSubmit={handleShopSubmit}>
                <p>
                    Shop Name: 
                    <input type="text" value={shopName} onChange={event => setShopName(event.target.value)} />
                </p>
                <p>
                    Shop Description: 
                    <textarea value={shopDescription} onChange={event => setShopDescription(event.target.value)} />
                </p>
                <button type="submit">Submit Shop</button>
                <button type="button" onClick={handleShopCancel}>Cancel</button>
            </form>
            
            <form onSubmit={handleProductSubmit}>
                <p>
                    Product Name: 
                    <input type="text" value={productName} onChange={event => setProductName(event.target.value)} />
                </p>
                <p>
                    Product Description: 
                    <textarea value={productDescription} onChange={event => setProductDescription(event.target.value)} />
                </p>
                <p>
                    Product Category: 
                    <input type="text" value={productCategory} onChange={event => setProductCategory(event.target.value)} />
                </p>
                <p>
                    Product Quantity: 
                    <input type="number" min="0" value={productQuantity} onChange={event => setProductQuantity(event.target.value)} />
                </p>
                <p>
                    Product Price: 
                    <input type="number" min="0" value={productPrice} onChange={event => setProductPrice(event.target.value)} />
                </p>
                <button type="submit">Submit Product</button>
                <button type="button" onClick={handleProductCancel}>Cancel</button>
            </form>
        </div>
    );
}
