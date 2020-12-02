import React, {useState} from 'react';

//stylesheets
import './index.scss';

const Home = (props) => {
    const Istate = {
        user: false
    };
    const [user,
        setUser] = useState(Istate);
		if (user===true) {
			console.log('user');
		}
    return <div className='billboard'>
        <div className='container'>
            <div className='row'>
                <div className='billboard_textbox'>
                    <h1>ACND</h1>
                    <p>
                        Where you find the perfect place to shop for your stylish comfotable athletic
                        lesure wear for men. To Help you focus on your goals and mission
                    </p>
                </div>
            </div>
        </div>
    </div>

};

export default Home;
