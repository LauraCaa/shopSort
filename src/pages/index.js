import { useState, useEffect } from "react";
import React from 'react';
import SearchBar from "@/components/search-bar"
import NewButtton from "@/components/new-button"
import FilterButtons from "@/components/filter-butons"
import RangePrice from "@/components/range-price";
import ProductList from "@/components/product-list"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/globals.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Sort by');
  const [filteredProducts, setFilteredProducts] = useState([]);


  function handleFilterChange(filterType) {
    setFilter(filterType);

    if (filterType === 'Sort by') {
      setFilteredProducts(products);
    } else if (filterType === 'alphabetical') {
      const sorted = [...products];
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(sorted);
    } else if (filterType === 'active') {
      const activeProducts = products.filter((product) => product.isActive);
      setFilteredProducts(activeProducts);
    } else if (filterType === 'inactive') {
      const inactiveProducts = products.filter((product) => !product.isActive);
      setFilteredProducts(inactiveProducts);
    }
    
  };
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((datos) => {
        setProducts(datos);
        setFilteredProducts(datos);
      });
  }, []);

  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  };

  return (
    <div className="main-bg main-font min-vh-100">
      <div className="overflow-hidden">
        <div className="py-4">
          <h3 className="ms-3 fw-normal">Products</h3>
        </div>
        <div className="row">
          <div className="col-5 col-md-3">
            <NewButtton />
          </div>
          <div className="col-12 pl-2 pr-2 col-md-5">
            <SearchBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-6 col-md-2 pl-3">
            <FilterButtons onFilterChange={handleFilterChange} />
          </div>
          <div className="col-6 col-md-2 pr-3">
            <RangePrice />
          </div>
        </div>
        <div className="row mx-1 pl-2 py-3">
          <div className="col-2 fw-bolder text-secondary">
            <p>PRODUCTS</p>
          </div>
          <div className="col-3 ps-0 fw-bolder text-secondary">
            <p>DETAIL</p>
          </div>
          <div className="col-2 text-center pe-5 fw-bolder text-secondary">
            <p>PRICE</p>
          </div>
          <div className="col-1 text-center pe-5 fw-bolder text-secondary">
            <p>STOCK</p>
          </div>
          <div className="col-2 text-center pe-5 fw-bolder text-secondary">
            <p>SKU</p>
          </div>
          <div className="col-2 text-center pe-5 fw-bolder text-secondary">
            <p>ACTIONS</p>
          </div>
          <ProductList products={filteredProducts} search={search} />
        </div>
      </div>
  </div>
  
  )
}
