import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './SearchBar.module.scss';
import InputField from 'components/FormControls/InputField';
import images from 'assets/images';
import OtherActions from './OtherActions';
const cx = classNames.bind(styles);

function SearchBar() {
    const form = useForm({
        defaultValues: {
            productName: '',
        },
    });

    const handleSubmit = async () => {};

    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <img src={images.logo} alt="logo" className={cx('logo')} />
            </Link>

            <form onSubmit={form.handleSubmit(handleSubmit)} className={cx('search-form')}>
                <button className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <InputField
                    form={form}
                    name="productName"
                    classNames={cx('search-input')}
                    placeholder="Search"
                    transparent
                />
            </form>

            <div>
                <OtherActions />
            </div>
        </div>
    );
}

export default SearchBar;
