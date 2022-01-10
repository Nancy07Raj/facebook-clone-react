import React from 'react'
import '../sass/catagories.scss'
import { Avatar, H3 } from '../StyledComponents/styles'
import { useSelector } from 'react-redux'


function Catagories(){
    const ownerImg = useSelector(state=>state.owner.img)
    const ownerName= useSelector(state=> state.owner.name)
    return(<div className='catagories'>
    <div>
        <Avatar src={ownerImg} />
        <H3>{ownerName}</H3>
    </div>
    <div className='friends'>
        <span><i class="fas fa-user-friends"></i></span>
        <H3>Friends</H3>
    </div>

    </div>)
}

export default Catagories