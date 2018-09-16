import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const EditButton = styled('button')({
  background: 'black',
  border: 'none',
  borderRadius: '50%',
  color: 'white',
  height: '50px',
  opacity: '0',
  position: 'absolute',
  right: '-10px',
  textAlign: 'center',
  top: '-10px',
  transition: 'all 200ms ease-in',
  width: '50px',
  ':hover': {
    backgroundColor: '#333',
    opacity: 1
  }
});

const I = styled('i')({
  color: 'white',
  fontSize: 28
});

const EditDialButton = ({ dial, handleShowDialModal }) => {
  const setDial = () => {
    handleShowDialModal(dial);
  };
  return (
    <EditButton className="edit-button" onClick={() => setDial()}>
      <I className="material-icons">edit</I>
    </EditButton>
  );
};

EditDialButton.propTypes = {
  dial: PropTypes.shape({
    siteName: PropTypes.string,
    siteUrl: PropTypes.string,
    container: PropTypes.string,
    favicon: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  handleShowDialModal: PropTypes.func.isRequired
};

export default EditDialButton;
