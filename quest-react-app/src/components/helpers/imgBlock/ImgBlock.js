import React, {Component} from 'react';
import {ReactComponent as SvgTestImg} from "../../../img/testImg.svg";

class ImgBlock extends Component{
  render() {
    return <div className='img-block'>
      <SvgTestImg />
      <span className='quest-name'>Recommended</span>
    </div>
  }
}

export default ImgBlock;