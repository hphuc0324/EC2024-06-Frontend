import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from 'components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button href={data.href} to={data.to} callback={data.onClick} classNames={cx('menu-item')}>
            {data.label}
        </Button>
    );
}

export default MenuItem;
