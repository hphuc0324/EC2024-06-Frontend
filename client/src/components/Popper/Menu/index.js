import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';

Menu.propTypes = {
    children: PropTypes.object.isRequired,
    items: PropTypes.array,
};

const cx = classNames.bind(styles);

function Menu(props) {
    const { children, items } = props;

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-list')}>
                        {items.map((item, index) => (
                            <MenuItem key={index} data={item} />
                        ))}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
