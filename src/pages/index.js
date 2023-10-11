import { useState, useEffect } from "react";
import SearchBar from "@/components/search-bar"
import NewButtton from "@/components/new-button"
import FilterButtons from "@/components/filter-butons"
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
      <div className="bg-body-secondary overflow-hidden vw-100">
        <div className="row py-4">
          <h1 className="ms-5 pb-4 pt-0 fw-normal">Products</h1>
          <div className="col">
            <NewButtton/>
          </div>
          <div className="col-2">
            <SearchBar onSearchChange={handleSearchChange}/>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="col-8 d-flex justify-content-end">
              <FilterButtons onFilterChange={handleFilterChange}/>
            </div>
          </div>
        </div>
        <div className="row">
          <ProductList products={filteredProducts} search={search}/>
        </div>
      </div>
    
  )
}
