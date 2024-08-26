import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import images from 'assets/images';
import { useEffect, useState } from 'react';
import productApi from 'api/productApi';
import { showToast } from 'components/ToastMessage';
import ProductList from 'features/Product/ProductList';

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleFetchProduct = async () => {
            try {
                const res = await productApi.getAll({ page: 1, limit: 6 });

                setProducts(res.data.metadata);
            } catch (error) {
                showToast('Error', 'Some errors happened while fetching product! Please try again later');
            }
        };

        handleFetchProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <img src={images.homeCover} className={cx('image')} />

            <div className={`${cx('content')} grid wide`}>
                <span className={cx('full-width', 'label')}>Buttercream Bakery</span>
                <span className={cx('full-width')}>
                    located in the heart of Saigon, is a paradise for dessert lovers. We specialize in fresh, delicious
                    cakes made from the finest ingredients. At Buttercream Bakey, each cake is not just a dessert but a
                    piece of art, providing an exceptional culinary experience for all your special occasions.
                </span>

                <div className={`row ${cx('panel-row', 'grid-row')}`}>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                </div>

                <span className={cx('full-width', 'label')}>Our latest products</span>

                <ProductList products={products} itemPerRow={3} />
            </div>
        </div>
    );
}

export default Home;
