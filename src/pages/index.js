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
          <h3 className="ml-3 fw-normal">Products</h3>
        </div>
        <div className="row">
          <div className="col-5 col-md-3">
            <NewButtton />
          </div>
          <div className="col-12 pl-3 col-md-5 mr-4">
            <SearchBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-6 col-md-2 pl-3">
            <FilterButtons onFilterChange={handleFilterChange} />
          </div>
          <div className="col-6 col-md-2 mr-4">
            <RangePrice />
          </div>
          <div>
            <ProductList products={filteredProducts} search={search} />
          </div>
        </div>
      </div>
  </div>
  
  )
}
