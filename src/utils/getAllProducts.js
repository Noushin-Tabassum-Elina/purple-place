const getAllProducts =async () => {
    const res = await fetch("http://localhost:5000/products",{cache:"force-cache"});
    return res.json();
};

export default getAllProducts;