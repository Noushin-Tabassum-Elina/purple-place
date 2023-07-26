import getAllProducts from "@/utils/getAllProducts";

const SingleProduct = async ({ params }) => {
    // console.log(params.id)
    const id = params.id;
    const products = await getAllProducts();
    const product = products.find(pd => pd.id == id)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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
