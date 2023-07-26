const getAllReviews =async () => {
    const res = await fetch("http://localhost:5000/reviews",{cache:"force-cache"});
    return res.json();
};

export default getAllReviews;