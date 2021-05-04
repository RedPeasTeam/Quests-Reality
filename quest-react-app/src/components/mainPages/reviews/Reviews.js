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
                    <div className='flex'>
                        <img src={element.image} className='reviews-avatar'></img>
                        <div className='reviews-text'>
                            <h3 className='reviews-name'>{element.firstName} {element.lastName}</h3>
                            <p>{element.comment}</p>
                        </div>
                    </div>
                    <p className='reviews-date'>{element.date}</p>
                </div>)}
            </div>
        </div>
    }
}

export default Reviews;