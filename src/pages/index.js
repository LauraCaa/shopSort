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
          <div className="row py-4">
            <h3 className="ms-3 pb-2 pt-0 fw-normal">Products</h3>
            <div className="col">
              <NewButtton />
            </div>
            <div className="col-5">
              <SearchBar onSearchChange={handleSearchChange} />
            </div>
            <div className="col d-flex">
              <div className="col-5">
                <FilterButtons onFilterChange={handleFilterChange} />
              </div>
              <div className="col-5">
                <RangePrice />
              </div>
            </div>
          </div>
          <div className="row">
            <ProductList products={filteredProducts} search={search} />
          </div>
        </div>
      </div>
  )
}
