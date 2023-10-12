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
                <th>Product</th>
                <th>Details</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sku</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
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
                  <td>${isEditing && editedProduct && editedProduct.id === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.price}
                    />
                  ) : (
                    product.price
                  )}</td>
                  <td>{isEditing && editedProduct && editedProduct.id === product.id ? (
                    <input
                      type="number"
                      value={editedProduct.stock}
                    />
                  ) : (
                    product.stock
                  )}</td>
                  <td>{product.sku}</td>
                  <td>
                    {isEditing && editedProduct && editedProduct.id === product.id ? (
                      <button onClick={saveChanges}>Guardar</button>
                    ) : (
                      <EditButton product={product} onEdit={handleEditClick} />
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
