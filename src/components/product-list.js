import React, { useState } from 'react';
import EditButton from './edit-button';

export default function ProductList({ products, search }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  function filterProductsBySearch(products, searchTerm) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const filteredProducts = filterProductsBySearch(products, search);

  function handleEditClick(product) {
    setIsEditing(!isEditing);
    setEditedProduct(product);
  };

  function handleFieldChange(event, field) {
    const updatedProduct = { ...editedProduct };
    updatedProduct[field] = event.target.value;
    setEditedProduct(updatedProduct);
  }

  function saveChanges() {
    // Lógica para guardar los cambios
    setIsEditing(false);
    setEditedProduct(null);
  };

  return (
    <div className="container">
      <div className="row mx-1 pl-2 py-3"> 
        <div className='col-2 fw-bolder text-secondary'>
          <p>PRODUCTS</p>
        </div>
        <div className='col-3 ps-0 fw-bolder text-secondary'>
          <p>DETAIL</p>
        </div>
        <div className='col-2 text-center pe-5 fw-bolder text-secondary'>
          <p>PRICE</p>
        </div>
        <div className='col-1 text-center pe-5 fw-bolder text-secondary'>
          <p>STOCK</p>
        </div>
        <div className='col-2 text-center pe-5 fw-bolder text-secondary'>
          <p>SKU</p>
        </div>
        <div className='col-2 text-center pe-5 fw-bolder text-secondary'>
          <p>ACTIONS</p>
        </div>
      </div>
      <div className="row mx-2 pl-2">
        {filteredProducts.map((product) => (
          <div className={`row mb-3 rounded-4 ${product.stock > 0 ? 'bg-white' : 'no-stock'}`} key={product.id}>
            <div className='col-1 d-flex flex-column align-items-center justify-content-center'>
              <img src={product.image} className="img-fluid product-image" alt={product.name}/>
            </div>
            <div className='col-4 pt-4 my-2'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="text"
                  value={editedProduct.name}
                  className='col-12'
                  onChange={(event) => handleFieldChange(event, "name")}
                />
              ) : (
                <>
                  <p className='text-16 fw-bolder'>{product.name}</p>
                  <p className='text-secondary'>{product.description}</p>
                </>
              )}
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="number"
                  value={editedProduct.price}
                  className='col-6 mt-2'
                  onChange={(event) => handleFieldChange(event, "price")}
                />
                ) : (
                  <p className='pt-4'>${product.price}</p>
              )}
            </div>
            <div className='col-1 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="number"
                  value={editedProduct.stock}
                  className='col-12 mt-2'
                  onChange={(event) => handleFieldChange(event, "stock")}
                />
              ) : (
                <p className='mt-2 pt-4'>{product.stock}</p>
              )}
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center main-font pt-4'>
              <p>{product.sku}</p>
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <button className="btn btn-success btn-lg main-font px-4 py-3 fw-bolder" onClick={saveChanges}>Save</button>
              ) : (
                <EditButton product={product} onEdit={handleEditClick}/>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


