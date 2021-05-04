import React, {Component} from 'react';

class Footer extends Component{
    render() {
        return <div className='footer'>
            <div className='contact-us'>
                <div className='visible-block'>Contact us</div>
                <div className='invisible-block'>QuestReality@2021.gmail.com</div>
            </div>
            <div className='copyrights'>
                &#169; 2021 BSU-team all rights are reserved
            </div>
        </div>
    }
}

export default Footer;