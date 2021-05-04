import React, {Component} from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []};
        this.handleReload()
     }

     async handleReload() {
        const response = await api.comments({ date: '' });
        this.setState({ comments: response });
     }

    render() {
        return <div className='home'>
            <div className='title'>Reviews</div>
            <div className='reviews-container'>
            {this.state.comments.map(
                (element) => <div className='reviews-item'>
                    <img src={element.image}></img>
                    <h4>{element.firstName} {element.lastName}</h4>
                    <p>{element.comment}</p>
                    <p>{element.date}</p>
                </div>)}
            </div>
        </div>
    }
}

export default Reviews;