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
            <img src={data.frnd.post} alt='post' height='500px' width='500px'/>
        </div>
        <div className='share'>
            <span><i class="fas fa-thumbs-up"></i></span>
            <div className='text'>
            <h5>23 comments</h5>
            <h5>14 shares</h5>
            </div>
        </div>
        <div className='icons'>
        <span><i class="far fa-thumbs-up"></i><H3>Like</H3></span>
        <span><i class="far fa-comment-alt"></i><H3>Comment</H3></span>
        <span><i class="fas fa-share"></i><H3>Share</H3></span>
        </div>

    </div>)

    })}

    </>)
}

export default News