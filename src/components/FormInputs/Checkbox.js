import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from '../../assets/images/checkbox-1.svg';
import checkImage from '../../assets/images/checkbox-2.svg';

class Checkbox extends Component {

  render() {
    let {
      input,
      label,
      type,
      meta: { touched, error, warning },
      disabled
    } = this.props;

    return (
      <label className={cx("checkbox", {
        checked: input.checked,
        disabled: disabled
      })}>
        <input {...input} type="checkbox" data-toggle="checkbox" disabled={disabled} />
        {label}
      </label>
    );
  }
}

export default Checkbox;