import React from 'react';
import FriendCard from './FriendCard';
import '../sass/StoryCard.scss'
import {Card} from '../StyledComponents/styles'
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
    {friends.map(data=>(
        <Card>
        <img src={data.frnd.card} alt='card' />
        <h4>{data.frnd.name}</h4>
    </Card>
    ))}

    {/* <FriendCard /> */}

    </div>)
}

export default StoryCard