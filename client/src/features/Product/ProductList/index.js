import PropTypes, { array } from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ProductList.module.scss';
import Product from '../Product';

const cx = classNames.bind(styles);

ProductList.propTypes = {
    itemPerRow: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired,

    productLayout: PropTypes.string,
};

function ProductList(props) {
    const { productLayout = 'vertical', products, itemPerRow } = props;

    const colCal = 12 / itemPerRow;
    const rowCal = Math.ceil(products.length / itemPerRow);

    return (
        <div className={`${cx('wrapper')} grid`}>
            {Array.from({ length: rowCal }).map((value, rowIndex) => {
                return (
                    <div
                        key={rowIndex}
                        className={`${cx('product-row', { 'horizontal-item': productLayout === 'horizontal' })} row`}
                    >
                        {products
                            .slice(rowIndex * itemPerRow, rowIndex * itemPerRow + itemPerRow)
                            .map((product, productIndex) => (
                                <div key={productIndex} className={`col c-${colCal}`}>
                                    <Product product={product} layout={productLayout} />
                                </div>
                            ))}
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;
