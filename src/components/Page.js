import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ theme, children }) => (
  <div className="page__container">
    <div className="page" style={{ backgroundColor: theme.primary }}>
      {children}
    </div>
  </div>
);

Page.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string
  }),
  children: PropTypes.arrayOf(PropTypes.object)
};

export default Page;
