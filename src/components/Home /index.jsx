import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast,faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
//stylesheets
import './index.scss';

const Home = () => {

    return <div className="home">

        <section className='billboard'>
            <div className='background'></div>
            <div className='container'>
                <div className='billboard_textbox'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Created to
                        <br/>make leaders,<br/>
                        not followers</h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="2000"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Coming Soon</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic"></p>

                </div>
            </div>
        </section>
        <div className='main-body'>
            <section className='intro'>
                <div className="container">
                    <h2>
                        A lifestyle and clothing brand that manifests leaders by surrounding them with
                        other seasoned leaders. More than just a community, but friends, brothers,
                        sisters, familia.<br/>
                        <span>Somos sangre.</span>
                    </h2>
                </div>
            </section>
            <section className="latest">
                <div className="container">
                    <h3>Latest Shit</h3>
                    <div className="latest-cont">
                        <div className="latest-item">
                            <div className="item-image-cont">
                                <img src="https://static.pullandbear.net/2/photos//2021/I/0/2/p/9247/599/505/9247599505_2_6_8.jpg?t=1624281688603&imwidth=850" alt=""/>
                                <div className="item-image-shadow"></div>
                            </div>
                            <h4>Sick Ass Tee</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                        <div className="latest-item">
                            <div className="item-image-cont">
                                <img src="https://static.pullandbear.net/2/photos//2021/I/0/2/p/9247/599/505/9247599505_2_6_8.jpg?t=1624281688603&imwidth=850" alt=""/>
                                <div className="item-image-shadow"></div>
                            </div>
                            <h4>Sick Ass Tee</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                        <div className="latest-item">
                            <div className="item-image-cont">
                                <img src="https://static.pullandbear.net/2/photos//2021/I/0/2/p/9247/599/505/9247599505_2_6_8.jpg?t=1624281688603&imwidth=850" alt=""/>
                                <div className="item-image-shadow"></div>
                            </div>
                            <h4>Sick Ass Tee</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quality">
                    <div className="text-box">
                    <h3>The Quality of Products: The Shit</h3>
                    <h6>Yeah it's pretty great quality</h6>
                    <p>We understand our customer base aren't made of millionaires yet(we aren't either). We have dedicated our resources to assure that the customer gets the best quality for the lowest price. </p>
                    </div>
                    <div className="image-box">
                        <img src="https://static.pullandbear.net/2/photos//2021/I/0/2/p/9247/599/800/9247599800_2_8_8.jpg?t=1624281688830&imwidth=1440" alt="" />
                    </div>
            </section>
            <section className="val-props">
            <div className="container">
                    <div className="val-prop-cont">
                        <div className="val-prop">
                            <div className="val-prop-icon">
                                <img src="https://res.cloudinary.com/izzyhv/image/upload/v1624746430/ecommerce/ACND/hecho-en-mexico-2_c0vlrc.svg" alt=""/>
                            </div>
                            <h4>Made in Mexico</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                        <div className="val-prop">
                            <div className="val-prop-icon">
                            <FontAwesomeIcon icon={faMoneyBillWave}/>
                            </div>
                            <h4>Bang for your buck</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                        <div className="val-prop">
                            <div className="val-prop-icon">
                            <FontAwesomeIcon icon={faShippingFast}/>
                            </div>
                            <h4>Shipping is rapido</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-products">
                <div className="container">
                    <h3>Please buy my shit</h3>
                </div>
            </section>
        </div>
        <section className=''></section>
    </div>

};

export default Home;
