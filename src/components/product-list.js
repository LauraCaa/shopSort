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

  const handleEditClick = (product) => {
    setIsEditing(!isEditing);
    setEditedProduct(product);
  };

  const saveChanges = () => {
    // Lógica para guardar los cambios
    setIsEditing(false);
    setEditedProduct(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-striped table-hover custom-table">
            <thead className="bg-primary text-white">
              <tr>
                <th className='text-center'>Product</th>
                <th >Details</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Stock</th>
                <th className='text-center'>Sku</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className='text-center align-middle'>
                    <img src={product.image} className="img-fluid product-image" alt={product.name} />
                  </td>
                  <td>
                    {isEditing && editedProduct && editedProduct.id === product.id ? (
                      <input
                        type="text"
                        value={editedProduct.name}
                      />
                    ) : (
                      <>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                      </>
                    )}
                  </td>
                  <td className='text-center align-middle'>${isEditing && editedProduct && editedProduct.id === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.price}
                    />
                  ) : (
                    product.price
                  )}</td>
                  <td className='text-center align-middle'>{isEditing && editedProduct && editedProduct.id === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.stock}
                    />
                  ) : (
                    product.stock
                  )}</td>
                  <td className='text-center align-middle'>{product.sku}</td>
                  <td className='text-center align-middle'>
                    {isEditing && editedProduct && editedProduct.id === product.id ? (
                      <button className="btn btn-success btn-lg fw-bolder" onClick={saveChanges}>Save</button>
                    ) : (
                      <EditButton product={product} onEdit={handleEditClick}/>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}