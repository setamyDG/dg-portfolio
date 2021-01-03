import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../utils';

const StyledSection = styled.section`
  padding: 100px 20px;

  ${media.tablet`
    padding: 50px 20px;
  `}
`;

const Section = memo(({ children }) => (
  <StyledSection>{children}</StyledSection>
));

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
