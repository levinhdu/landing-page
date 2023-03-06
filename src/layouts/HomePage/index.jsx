import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Silde from '../components/Silde';
import FactItem from '../components/FactItem';
import Introduce from '../components/Introduce';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <>
        <Header/>
        <Silde/>
        <FactItem/>
        <Introduce/>
        </>
    );
}

export default HomePage;