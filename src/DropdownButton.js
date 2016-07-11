import omit from 'lodash-compat/object/omit';
import pick from 'lodash-compat/object/pick';
import React from 'react';

import Dropdown from './Dropdown';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  bsStyle: React.PropTypes.string,
  bsSize: React.PropTypes.string,
  title: React.PropTypes.node.isRequired,
  noCaret: React.PropTypes.bool,

  // Override generated docs from <Dropdown>.
  children: React.PropTypes.node,
};

class DropdownButton extends React.Component {
  render() {
    const { bsSize, bsStyle, title, children, ...props } = this.props;

    const dropdownProps = pick(
      props, Object.keys(Dropdown.ControlledComponent.propTypes)
    );
    const toggleProps = omit(
      props, Object.keys(Dropdown.ControlledComponent.propTypes)
    );

    return (
      <Dropdown
        {...dropdownProps}
        bsSize={bsSize}
        bsStyle={bsStyle}
      >
        <Dropdown.Toggle
          {...toggleProps}
          bsSize={bsSize}
          bsStyle={bsStyle}
        >
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownButton.propTypes = propTypes;

export default DropdownButton;
