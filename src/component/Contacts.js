import React from  'react';
import '../sass/contacts.scss'
import {useSelector} from 'react-redux'
import {Avatar, H3 } from '../StyledComponents/styles';

const Contacts = ()=>{
    const friends = useSelector(state => state.friends);
    return(<div className='contactsContainer'>
        <h4>Sponsored</h4>
        <hr />
        <div className='contacts'>
        <div className='contactIcons'>
        <h4>Contacts</h4>
        <div>
        <i class="fas fa-video"></i>
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-h"></i>
        </div>
        </div>
        <div className='frndsOnline'>
        {friends.map(data=>(
            <div>
                <Avatar src={data.frnd.img} />
                <H3>{data.frnd.name}</H3>
                <span><i class="fas fa-circle"></i></span>
            </div>
        ))}

        </div>
        </div>
        <hr />
        <div className='group'>
        <h4>Group Conversation</h4>
        <div>
        <span><i class="fas fa-user-friends"></i></span>
        <h3>Nancy,Facebook User and 14 others</h3>
        </div>
        <div>
        <span className='plusIcon'><i class="fas fa-plus"></i></span>
        <h3>Create New Group</h3>
        </div>

        </div>
    </div>)
}

export default Contacts;