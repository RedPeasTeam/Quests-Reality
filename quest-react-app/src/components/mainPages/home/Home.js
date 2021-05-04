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
       const vlad = this.state.main.map((element) =>  
         <div className='gallery'>                                  
            <img src={element.image}></img>
            <p className='h1'>{element.name}</p>
            <p>{element.genre}</p>
            <p>{element.description}</p>
         </div> 
          );
        return(
         <div className='home'>
         <div className='title'>Recommended</div>
         <div className='home__container'>{vlad}</div>
        </div>
        );
        
    }
}

export default Home;