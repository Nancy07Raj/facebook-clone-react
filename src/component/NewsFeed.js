import React from 'react';
import { useSelector } from 'react-redux';
import {H3, Avatar, SearchBar} from '../StyledComponents/styles'
import '../sass/newsfeed.scss'


function NewsFeed(){
    const owner = useSelector(state => state.owner)
    return(<div className='news'>
        <div className='story'>
            <span><i class="fas fa-plus"></i></span>
            <div className='storyH'>
            <h3>Create Story</h3>
            <H3 className='share'>Share a photo or write something </H3>
            </div>
        </div>
        <div className='onmind'>
        <div className='comment'>
        <Avatar src={owner.img} margin='10px 0' />
        <SearchBar placeholder="What's On Your Mind, Nancy?" radius="20px" width='400px' padding='10px'/>
        </div>
        <hr></hr>
        <div className='picVideo'>
        <div>
        <span>
        <i style={{color:'#d9534f'}} class="fas fa-video"></i></span>
        <H3>Live Video</H3>
        </div>
        <div>
           <span ><i style={{color:'#55E0A3'}} class="fas fa-images"></i></span> 
           <H3>Photos/Videos</H3>
        </div>
        <div>
            <span><i style={{color:'#EEBB4D'}} class="far fa-laugh-beam"></i></span>
            <H3>Feeling/Activity</H3>
        </div>

        </div>
        </div>
    </div>)

}

export default NewsFeed