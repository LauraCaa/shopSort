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

  return(
      <div className='container-fluid row pl-3 pt-3 table-responsive'>
        <table>
          <thead>
            <tr>
              <th className='fw-bolder text-secondary'>PRODUCT</th>
              <th className='text-center fw-bolder text-secondary'>DETAIL</th>
              <th className='fw-bolder text-secondary'>PRICE</th>
              <th className='text-center fw-bolder text-secondary'>STOCK</th>
              <th className='text-center fw-bolder text-secondary'>SKU</th>
              <th className='text-center fw-bolder text-secondary'>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {filteredProducts.map((product) => (
            <tr className={`separe rounded-5 ${product.stock > 0 ? 'bg-white' : 'no-stock'}`} key={product.id}>
              <td className='d-flex flex-column align-items-center justify-content-center'>
                <div className='align-self-start pl-1 pt-2'>
                  {product.isActive ? <span className="green-dot"></span> : <span className="red-dot"></span>}
                </div>
                <div className='pt-1'>
                  <img src={product.image} className="img-fluid product-image align-items-center justify-content-center" alt={product.name}/>
                </div>
              </td>
              <td className='pt-4 my-2'>
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
              </td>
              <td className='text-center'>
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
              </td>
              <td className='text-center'>
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
              </td>
              <td className='text-center main-font pt-4'>
                <p>{product.sku}</p>
              </td>
              <td className='text-center'>
                {isEditing && editedProduct && editedProduct.id === product.id ? (
                  <button className="btn btn-success btn-lg main-font px-4 py-3 fw-bolder" onClick={saveChanges}>Save</button>
                ) : (
                  <EditButton product={product} onEdit={handleEditClick}/>
                )}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}