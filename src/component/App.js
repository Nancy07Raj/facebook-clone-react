import React from 'react';
import Header from './header';
import {Provider} from 'react-redux'
import store from '../redux/store'
import '../sass/App.scss'
import Catagories from './catagories';

function App(){
    return(<Provider store={store}>
    <div className='fbcontainer'>
        <Header />
        <div className='bodyContainer'>
        <Catagories />
        </div>
    </div>
    </Provider>)
}

export default App