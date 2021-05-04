import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api'
// import ImgBlock from "../../helpers/imgBlock/ImgBlock";

//const imgs = ['../../../img/testImg.png'];
const api = new Api.DefaultApi()
class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {main: []};
      this.handleReload()
   }
   async handleReload() {
      const response = await api.main({ date: '' });
      this.setState({ main: response });
   }
    render() {
        return <div className='home'>
            <div className='title'>Recommended</div>
            <div className='gallery'>
            {this.state.main.map((element) => <img src={element.image}></img>)}
                {/*{imgs.map((img, index)=>{
                    return <img src={testImg} key={index} />
                })}*/}
                {/*todo*/}
            </div>
        </div>
    }
}

export default Home;