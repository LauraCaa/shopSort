import React from "react";
import EditButton from "./edit-button";

export default function ProductList({ products, search }) {
    function filterProductsBySearch(products, searchTerm) {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const filteredProducts = filterProductsBySearch(products, search);

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
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.sku}</td>
              <td>
                <EditButton />
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
