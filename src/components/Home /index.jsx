import React, {useState} from 'react';

//stylesheets
import './index.scss';

const Home = (props) => {
    const Istate = {
        user: false,
        setUser: null
    };
    const [user,
        setUser] = useState(Istate);
		if (user===true) {
			console.log('user');
			console.log(setUser);
		}
    return <div className='billboard'>
        <div className='background'></div>
        <div className='container'>
            <div className='row'>
                <div className='billboard_textbox'>
                    <h1>ACND</h1>
                    <h2 data-aos="zoom-in" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-out-cubic">Coming Soon</h2>
                    <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                        A lifestyle and clothing brand to help you ACND.
                    </p>
                </div>
            </div>
        </div>
    </div>

};

export default Home;
