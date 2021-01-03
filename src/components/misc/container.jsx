import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  max-width: ${({ theme }) => theme.settings.sectionWidth};
  margin: 0 auto;
`;

const StyledContainer = memo(({ children }) => (
  <Container>{children}</Container>
));

export default StyledContainer;

StyledContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
