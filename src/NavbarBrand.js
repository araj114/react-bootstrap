import classNames from 'classnames';
import React from 'react';

import { prefix } from './utils/bootstrapUtils';

const contextTypes = {
  $bs_navbar_bsClass: React.PropTypes.string
};

class NavbarBrand extends React.Component {
  render() {
    const { className, children, ...props } = this.props;
    const { $bs_navbar_bsClass: bsClass = 'navbar' } = this.context;
    const brandClasses = prefix({ bsClass }, 'brand');

    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: classNames(
          children.props.className, className, brandClasses
        )
      });
    }

    return (
      <span {...props} className={classNames(className, brandClasses)}>
        {children}
      </span>
    );
  }
}

NavbarBrand.contextTypes = contextTypes;

export default NavbarBrand;
