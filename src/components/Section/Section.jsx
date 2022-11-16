import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ded2ca;
  width: 300px;
  padding: 60px 30px;
  box-shadow: 6px 6px 12px 0 rgb(0 0 0 / 51%);
  min-height: 400px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 35px;
`;

export function Section({title, children}) {
  return <AppSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </AppSection>;
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};