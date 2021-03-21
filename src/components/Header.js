import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
    const { title, onAdd, showAddForm } = props;
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    onClick={onAdd}
                    text={showAddForm ? 'بستن' : 'اضافه کردن'}
                    color={showAddForm ? 'red' : 'green'}
                />
            )}
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
