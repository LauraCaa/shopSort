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
      <div className="row mx-2 pl-2 py-3"> 
        <div className='col-2'>
          <h3>Product</h3>
        </div>
        <div className='col-3 ps-0'>
          <h3>Detail</h3>
        </div>
        <div className='col-2 text-center pe-5'>
          <h3>Price</h3>
        </div>
        <div className='col-1 text-center pe-5'>
          <h3>Stuck</h3>
        </div>
        <div className='col-2 text-center pe-5'>
          <h3>Sku</h3>
        </div>
        <div className='col-2 text-center pe-5'>
          <h3>Actions</h3>
        </div>
      </div>
      <div className="row mx-2 pl-2">
        {filteredProducts.map((product) => (
          <div className="row bg-white mb-3 rounded-4" key={product.id}>
            <div className='col-1 d-flex flex-column align-items-center justify-content-center'>
              <img src={product.image} className="img-fluid product-image" alt={product.name} />
            </div>
            <div className='col-4 pt-3 my-3'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="text"
                  value={editedProduct.name}
                  className='col-12'
                />
              ) : (
                <>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </>
              )}
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="number"
                  value={editedProduct.price}
                  className='col-6 mt-2'
                />
                ) : (
                  <p className='pt-2'>${product.price}</p>
              )}
            </div>
            <div className='col-1 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <input
                  type="number"
                  value={editedProduct.stock}
                  className='col-12 mt-2'
                />
              ) : (
                <p className='mt-2'>{product.stock}</p>
              )}
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center'>
              <h6>{product.sku}</h6>
            </div>
            <div className='col-2 d-flex flex-column align-items-center justify-content-center'>
              {isEditing && editedProduct && editedProduct.id === product.id ? (
                <button className="btn btn-success btn-lg fw-bolder" onClick={saveChanges}>Save</button>
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



{/* <table className="table table-bordered table-striped table-hover custom-table">
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
                  <td className='text-center align-middle'></td>
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
          </table> */}