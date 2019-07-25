import React from 'react';
import Box from '../box';
import './index.scss';

const Board = () => {
  return (
    <div className="board">
      <Box />
      <Box />
      <Box borderRightNone />
      <Box />
      <Box />
      <Box borderRightNone />
      <Box borderBottomNone />
      <Box borderBottomNone/>
      <Box borderRightNone borderBottomNone />
    </div>
  )
}

export default Board;