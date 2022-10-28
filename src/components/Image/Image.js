import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import imgages from '~/assets/images';
import styles from './Image.module.scss';

const Imgage = forwardRef(({ src, alt, className, fallback: customFallBack = imgages.noImage, ...props }, ref) => {
    const [fallback, setFallBack = imgages] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Imgage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Imgage;
