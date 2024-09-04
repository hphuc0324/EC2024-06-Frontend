import ProductDetails from 'features/Product/ProductDetails';
import ProductList from 'features/Product/ProductList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import productApi from 'api/productApi';
import { relative } from 'path-browserify';

const cx = classNames.bind(styles);

function Product() {
    const { _id } = useParams();
    const [productConfig, setProductConfig] = useState({
        _id: _id,
        quantity: 1,
        size: 'small',
    });

    const [product, setProduct] = useState();

    const [reviews, setReviews] = useState({
        data: [1, 2, 3, 4],
        count: 4,
        page: 1,
        limit: 2,
    });

    const [related, setRelated] = useState([]);

    const handleChangeReviewPage = (value) => {
        setReviews((prev) => ({ ...prev, page: value }));
    };

    useEffect(() => {
        const handleFetchProduct = async () => {
            const res = await productApi.get(_id);
            setProduct(res.data.metadata);
        };

        handleFetchProduct();
    }, [_id]);

    useEffect(() => {
        if (!product) {
            console.log('Product is null or undefined');
            return; // Exit early if product is undefined or null
        }
        const handleFetchRelated = async () => {
            const res = await productApi.getAll({ product_category: product.product_category });
            const relatedProducts = res.data.metadata.filter((p) => p._id !== product._id);

            setRelated(relatedProducts);
        };

        handleFetchRelated();
    }, [product]);

    return (
        <div className={cx('wrapper')}>
            {product && (
                <ProductDetails
                    product={product}
                    productConfig={productConfig}
                    setProductConfig={setProductConfig}
                    reviews={reviews.data}
                    reviewsCount={Math.ceil(reviews.count / reviews.limit)}
                    onReviewPageChange={handleChangeReviewPage}
                />
            )}
            <ProductList products={related} itemPerRow={3} />
        </div>
    );
}

export default Product;
