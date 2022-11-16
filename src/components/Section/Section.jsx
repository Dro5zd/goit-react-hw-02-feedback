import * as PropTypes from 'prop-types';

import {Component} from 'react';
import {AppSection, SectionTitle} from './Section.styled';


export class Section extends Component {
  render() {
    let {title, children} = this.props;
    return (
      <AppSection>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </AppSection>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};