import React from 'react';
import Tooltip from './index'
import './tooltip.css'

function TooltipTest() {
  return (
    <div>
      <h1>Tooltip</h1>
      <Tooltip delay={2000} content={'Tooltip Content'} children={<p style={{cursor:'pointer'}}>Hover me</p>}  />
    </div>
  )
}

export default TooltipTest;