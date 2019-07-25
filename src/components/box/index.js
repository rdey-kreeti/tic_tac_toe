import React from 'react';
import './index.scss';

const Box = ({borderRightNone = false, borderBottomNone = false}) => {
  console.log(borderRightNone, borderBottomNone)
  const className = (borderRightNone, borderBottomNone) => {
    if (borderRightNone === true && borderBottomNone === false) {
      return 'box border-right-none';
    } else if (borderRightNone === false && borderBottomNone === true) {
      return 'box border-bottom-none';
    } else if (borderRightNone === true && borderBottomNone === true) {
      return 'box border-right-none border-bottom-none';
    }
    return 'box';
  }

  return (
    <div className={className(borderRightNone, borderBottomNone)}>
    </div>
  )
}

export default Box;