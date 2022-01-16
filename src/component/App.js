import React from 'react';
import Header from './header';
import {Provider} from 'react-redux'
import store from '../redux/store'
import '../sass/App.scss'
import Catagories from './catagories';
import NewsFeed from './NewsFeed';

function App(){
    return(<Provider store={store}>
    <>
        <Header />
        <div className='bodyContainer'>
        <Catagories />
        <NewsFeed />
        </div>
    </>
    </Provider>)
}

export default App