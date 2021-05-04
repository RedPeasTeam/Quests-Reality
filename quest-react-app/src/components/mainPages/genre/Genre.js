import React, {Component} from 'react';
import ImgBlock from "../../helpers/imgBlock/ImgBlock";

const list = ['Action games', 'Active', 'With actors', 'Historical', 'Terrible', 'Exit the room', 'By movies', 'By video games', 'By books', 'Family', 'For children', 'For a large company', 'For adults', 'For school children', 'For beginners'];

class Genre extends Component {
    render() {
        return <div className='genre'>
        <div className='genre-list-wrapper'>
            <span className='genre-title'>Genres</span>
            <div className='genre-list'>
                {list.map((value, index) => {
                    return <span className='genre-item' key={index}>{value}</span>
                })}
            </div>
        </div>
        <div className='genre-gallery'>
            <ImgBlock/>
            <ImgBlock/>
            <ImgBlock/>
            <ImgBlock/>
        </div>
    </div>
    }
}

export default Genre;