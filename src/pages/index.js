import Navbar from "@/components/navbar"
import SearchBar from "@/components/search-bar"
import NewButtton from "@/components/new-button"
import FilterButtons from "@/components/filter-butons"
import ProductList from "@/components/product-list"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/globals.css';

export default function Home() {
  return (
      <div className="bg-body-secondary overflow-hidden vw-100">
        <div className="row py-4">
          <div className="col-4">
            <SearchBar></SearchBar>
          </div>
        </div>
        <div className="row py-4">
          <h1 className="ms-5 pb-4 pt-0 fw-normal">Products</h1>
          <div className="col">
            <NewButtton></NewButtton>
          </div>
          <div className="col-2">
            <SearchBar></SearchBar>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="col-8 d-flex justify-content-end">
              <FilterButtons></FilterButtons>
            </div>
          </div>
        </div>
        <div className="row">
          <ProductList></ProductList>
        </div>
      </div>
    
  )
}
