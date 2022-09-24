import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";
import BannerHome from "../../Assets/Images/bannerhome.jpg"
import { products } from '../../data'

function Home() {
    const [route,setRoute] = useState();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let ComponentMouted = true;
    let navigate = useNavigate();

    // Home page product using API
    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true);
    //         const response = await fetch(
    //             "http://localhost:3000/products"
    //         );
    //         if (ComponentMouted) {
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //         }
    //         return () => {
    //             ComponentMouted = false;
    //         };
    //     };
    //     getProducts();
    // }, []);

console.log(products,'newData')

    return (
        <>
            <div className="home-banner">
                <img src={BannerHome} alt="bannerhome" />
            </div>
            <div className="featured-section pt-3">
                <div className="container-wrap">
                    <h2 className="text-center mb-0">Featured Products </h2>
                    <div className="featured">
                        <div className="featured-row row pt-md-5 pb-md-5 pt-2 pb-4">
                            {products.map((product) => {
                                return (
                                    <div
                                        className="product-fea col-md-3 col-6 pb-2"
                                        key={product.id}
                                        >
                                        <NavLink to={`/product/${product.id}`}>
                                        <div className="wraper-prod-img">
                                        <img src={product.images} alt={product.title} />
                                        <img src={product.hover_images} alt={product.title} className="prod-img-hover"/>
                                        </div>
                                        <p className="text-center pt-2 mb-0">{product.title}</p></NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="happy-section">
                <div className="container-wrap">
                    <h2 className="text-center">Happy Customers</h2>
                </div>
            </div>
        </>
    );
}
export default Home;
