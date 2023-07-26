import getAllProducts from "@/utils/getAllProducts";
import React from 'react';
// import { Carousel } from "react-responsive-carousel";

const SingleProduct = async ({ params }) => {
    // console.log(params.id)
    const id = params.id;
    const products = await getAllProducts();
    const product = products.find(pd => pd.id == id)

            return (
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        {/* <Carousel> */}
                        <figure>
                                {
                                    product.images.map((image, index) => <div key={index}><img src={image} /></div>)
                                }
                       

                            {/* <img src={product.images[0]} alt="Shirt" /> */}
                        </figure>
                        {/* </Carousel> */}
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>  {product.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
 
 export default SingleProduct;
