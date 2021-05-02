import React from 'react';
class Tab extends React.Component {
  render() {
    if (this.props.isSelected) {
      return (
        <div className="my-4">
          { this.props.children }
        </div>
      );
    }
    return null;
  }
}
export default Tab;