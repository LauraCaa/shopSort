import { useState, useEffect } from "react"
import EditButton from "./edit-button"


export default function ProductList(){
    const[products,setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
        .then(response => response.json())
        .then(datos => {
            setProducts(datos)
        })
    }, [])

    return(
        <div className="">
            <div className="me-5 ms-5">
                <table className="table table-striped py-2 table-danger">
                    <thead>
                        <tr className="border border-primary my-2">
                            <th>Product</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Sku</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                        <tr key={product.id} className="border border-primary">
                            <td className="">
                                <img src={product.image} className="img-fluid"/>
                            </td>
                            <td>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.sku}</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        ))}





                        {/* <tr className="border border-primary">
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Silla</td>
                            <td>$1234</td>
                            <td>23</td>
                            <td>7892</td>
                            <td>
                                <EditButton></EditButton>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}