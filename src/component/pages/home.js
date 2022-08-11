import React from 'react';
import './page.css';
import Image from'./img/img1.jpg'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home" id='home'>
                <div className = "title">
                    Welcome!
                    </div>
                <div className='sabtitle'>
                    ShigemotoLab
                </div>
                    <input type="image" img src={Image} alt="Image" width="450" height="600"/>
               
            </div>

        )
    }
    
}
// export default Home;

// export const IconComponent = () =>{
    // return <image src={Image}  alt="Image" />
//   }
//   export default IconComponent