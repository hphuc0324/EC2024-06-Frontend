import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './FilterBar.module.scss';

import { FILTER_CONSTANTS } from 'constants/categoryFilters';
import compareTwoValues from 'utils/compareTwoValues';
import { useState, useEffect } from 'react';
import categoryApi from 'api/categoryApi';
import { showToast } from 'components/ToastMessage';

const cx = classNames.bind(styles);

FilterBar.propTypes = {
    filters: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

function FilterBar(props) {
    const { filters, onFilterChange } = props;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const handleFetchCategories = async () => {
            try {
                const res = await categoryApi.getAll();
                const categoriesMapped = res.data.metadata.map((category) => ({
                    ...category,
                    value: category._id,
                    title: category.name,
                }));

                setCategories([{ title: 'Category', values: categoriesMapped }, ...FILTER_CONSTANTS]);
            } catch (error) {
                showToast('Error', 'Error while fetching categories. Please try again later');
            }
        };

        handleFetchCategories();
    }, []);

    const renderFilter = (filter, key) => (
        <div key={key} className={cx('filter-block')}>
            <span className={cx('filter-title')}>{filter.title}</span>
            <ul className={cx('filter-list')}>
                {filter.values.map((item, index) => (
                    <li
                        className={cx('filter-value', {
                            active: compareTwoValues(item.value, filters[filter.title.toLowerCase()]),
                        })}
                        onClick={() => onFilterChange(item.value, filter.title.toLowerCase())}
                        key={index}
                    >
                        {filter.radioButton && (
                            <input
                                type="radio"
                                className={cx('filter-radio-button')}
                                checked={compareTwoValues(item.value, filters[filter.title.toLowerCase()])}
                                readOnly
                            />
                        )}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
    return (
        <>
            {categories && (
                <div className={cx('wrapper')}>{categories.map((filter, index) => renderFilter(filter, index))}</div>
            )}
        </>
    );
}

export default FilterBar;
