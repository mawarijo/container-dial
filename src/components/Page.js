import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Attribution from './Attribution';

const PageContainer = styled('div')(
  {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw'
  },
  ({ theme }) => ({
    background: theme.light
  })
);

const Background = styled('div')(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  ({ background }) => ({
    backgroundImage:
      background && background.image && `url('${background.image.urls.full}')`
  })
);

const Overlay = styled('div')({
  background: 'rgba(0,0,0,0.1)',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
});

const PageTitle = styled('h1')({
  color: 'rgba(255,255,255,0.7)',
  fontWeight: 100,
  margin: 30,
  textAlign: 'center'
});

export const Page = ({ background, container, children }) => {
  return (
    <PageContainer>
      <Background background={background}>
        <Overlay>
          <PageTitle>{container.name}</PageTitle>
          {children}
          <Attribution image={background && background.image} />
        </Overlay>
      </Background>
    </PageContainer>
  );
};

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  background: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    imageDate: PropTypes.string
  }),
  container: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  background: state.backgrounds.filter(
    background => background.container === state.container.cookieStoreId
  )[0],
  container: state.container
});

export default connect(mapStateToProps)(Page);
