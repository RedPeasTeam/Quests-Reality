import React, {Component} from 'react';
import ImgBlock from "../../helpers/imgBlock/ImgBlock";

//const imgs = ['../../../img/testImg.png'];

class Home extends Component {
    render() {
        return <div className='home'>
            <div className='title'>Recommended</div>
            <div className='gallery'>
                <ImgBlock />
                <ImgBlock />
                <ImgBlock />
                <ImgBlock />
                <ImgBlock />
                <ImgBlock />
                {/*{imgs.map((img, index)=>{
                    return <img src={testImg} key={index} />
                })}*/}
                {/*todo*/}
            </div>
        </div>
    }
}

export default Home;