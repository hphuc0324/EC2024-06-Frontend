import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

Wrapper.propTypes = {
    children: PropTypes.any.isRequired,

    classNames: PropTypes.string,
};

function Wrapper(props) {
    const { children, classNames } = props;

    return <div className={cx('wrapper', { [classNames]: classNames })}>{children}</div>;
}

export default Wrapper;
