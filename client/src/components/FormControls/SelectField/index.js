import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from './SelectField.module.scss';

const cx = classNames.bind(styles);

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,

    label: PropTypes.string,
    classNames: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

function SelectField(props) {
    const { form, name, choices, label, classNames, placeholder, onChange: customOnChange } = props;

    const classes = cx('wrapper', {
        [classNames]: classNames,
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
                    <select
                        name={name}
                        onChange={(e) => {
                            onChange(e);

                            if (customOnChange) customOnChange(e);
                        }}
                        onBlur={onBlur}
                        value={value}
                        className={classes}
                    >
                        {choices.map((choice, index) => (
                            <option key={index} value={choice.value}>
                                {choice.label}
                            </option>
                        ))}
                    </select>
                </>
            )}
        />
    );
}

export default SelectField;
