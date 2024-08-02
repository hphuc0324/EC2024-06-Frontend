import ProductDetails from 'features/Product/ProductDetails';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { _id } = useParams();
    const [productConfig, setProductConfig] = useState({
        _id: _id,
        quantity: 1,
        size: 'small',
    });

    const [reviewConfig, setReviewConfig] = useState({
        page: 1,
        limit: 2,
    });

    const [reviews, setReviews] = useState({
        data: [1, 2, 3, 4],
        count: 4,
    });

    const handleChangeReviewPage = (value) => {
        setReviewConfig((prev) => ({ ...prev, page: value }));
    };

    console.log(reviewConfig.page);

    return (
        <>
            <ProductDetails
                product={{}}
                productConfig={productConfig}
                setProductConfig={setProductConfig}
                reviews={reviews.data}
                reviewsCount={Math.ceil(reviews.count / reviewConfig.limit)}
                onReviewPageChange={handleChangeReviewPage}
            />
        </>
    );
}

export default Product;
