import React from 'react';
import '../sass/StoryCard.scss'
import {Card, Avatar} from '../StyledComponents/styles'
import {useSelector} from 'react-redux'

function StoryCard(){
    const owner = useSelector(state => state.owner);
    const friends = useSelector(state=> state.friends);

    return(<div className='storycard'>
    <div className='ownercard'>
    <img src={owner.img} alt='owner' />
    <span><i class="fas fa-plus"></i></span>
    <h4>Create Story</h4>
    </div>
    {friends.map((data,index)=>(
        <Card>
        <img className='cardImg' src={data.frnd.card} alt='card' key={index} />
        <Avatar className='storyAvatar' src={data.frnd.img} key={index} />
        <h4>{data.frnd.name}</h4>
    </Card>
    ))}

    </div>)
}

export default StoryCard