import React from 'react';


//stylesheets
import './index.scss';


const Home = () => {


    return <div className='billboard'>
        <div className='background'></div>
        <div className='container'>
                <div className='billboard_textbox'>
                    <h1 data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Created to <br/>make leaders,<br/> not followers</h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="2000"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Coming Soon</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">
                        A lifestyle and clothing brand that manifests leaders by surrounding them with other seasoned leaders. More than just a community, but friends, brothers, sisters, familia.<br/>
                        Somos sangre.
                    </p>

                </div>
        </div>
    </div>

};

export default Home;
