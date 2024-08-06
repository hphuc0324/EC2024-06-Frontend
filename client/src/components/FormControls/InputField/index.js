import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    classNames: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    inputType: PropTypes.string,
    transparent: PropTypes.bool,
    readOnly: PropTypes.bool,
};

function InputField(props) {
    const {
        form,
        name,
        label,
        classNames,
        disabled,
        placeholder,
        inputType = 'text',
        transparent = false,
        readOnly = false,
    } = props;
    const { errors } = form.formState;
    const hasErrors = !!errors[name];

    const classes = cx('wrapper', {
        [classNames]: classNames,
        transparent: transparent,
    });

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value, name } }) => (
                <>
                    {label && (
                        <div className={cx('label')} htmlFor={name}>
                            {label}
                        </div>
                    )}
                    <input
                        readOnly={readOnly}
                        type={inputType}
                        className={classes}
                        placeholder={placeholder || ''}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                    {hasErrors && <span className={cx('error-message')}>{errors[name]?.message}</span>}
                </>
            )}
        />
    );
}

export default InputField;
