import React from 'react';
import {useSelector} from 'react-redux'
import {Avatar,H3} from '../StyledComponents/styles'
import '../sass/news.scss'

function News(){
    const friends = useSelector(state=> state.friends);
    return(<>
    {friends.map(data =>{
        return(<div className='newsCard'>
         <div className='sender'>
        <Avatar src={data.frnd.img} heigth='60px' />
        <div className='sname'>
        <H3>{data.frnd.name}</H3>
        <div>
        <h5>8h .</h5>
        <span><i class="fas fa-globe-americas"></i></span>
        </div>
        </div>
        </div>
        <div>
            <img src={data.frnd.post} height='500px' width='500px'/>
        </div>

    </div>)

    })}

    </>)
}

export default News