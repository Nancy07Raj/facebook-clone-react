import React from 'react'
import '../sass/catagories.scss'
import { Avatar, H3 } from '../StyledComponents/styles'
import { useSelector } from 'react-redux'


function Catagories(){
    const ownerImg = useSelector(state=>state.owner.img);
    const ownerName= useSelector(state=> state.owner.name);
    return(<div className='catagoriesContainer'>
        <div className='catagories'>
        <div>
            <Avatar src={ownerImg} />
            <H3>{ownerName}</H3>
        </div>
        <div>
            <span><i class="fas fa-user-friends"></i></span>
            <H3>Friends</H3>
        </div>
        <div>
            <span className='groups'><i class="fas fa-users"></i></span>
            <H3>Groups</H3>
        </div>
        <div>
            <span><i class="fas fa-store"></i></span>
            <H3>Market Place</H3>
        </div>
        <div>
            <span><i class="far fa-play-circle"></i></span>
            <H3>Watch</H3>
        </div>
        <div>
            <span><i class="far fa-clock"></i></span>
            <H3>Memories</H3>
        </div>
        <div>
            <span className='tag'><i class="fas fa-tag"></i></span>
            <H3>Saved</H3>
        </div>
        <div>
            <span className='flag'><i class="far fa-flag"></i></span>
            <H3>Pages</H3>
        </div>
        <div>
            <span><i class="far fa-calendar-alt"></i></span>
            <H3>Events</H3>
        </div>
        <div>
            <span className='jobs'><i class="fas fa-briefcase"></i></span>
            <H3>Jobs</H3>
        </div>
        <div>
            <span className='arrow'><i class="fas fa-chevron-down"></i></span>
            <H3>See More</H3>
        </div>
        <hr />
        <div className='h4div'><h4>Your Shortcuts</h4></div>
    </div>
    </div>)
}

export default Catagories