import React from 'react';
import {SearchBar, Avatar, H3 } from '../StyledComponents/styles'
import { useSelector } from 'react-redux';
import '../sass/header.scss'


function Header(){
    const ownerImg = useSelector(state=> state.owner.img);
    const ownerName = useSelector(state=>state.owner.name);
    console.log(ownerImg)

    return(<div className='header'>
        <span className='fb'><a href='#'><i class="fab fa-facebook"></i></a></span>
        <div className="searchBar">
        <span className='searchIcon'><i class="fas fa-search"></i></span>
        <SearchBar placeholder='Search Facebook' />
        </div>
        <div className='headerIcon'>
        {/* <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/> */}
        <div><i class="fas fa-home"></i></div>
        <div><i class="far fa-play-circle"></i></div>
        <div><i class="fas fa-user-friends"></i></div>
        <div><i class="fas fa-store"></i></div>
        <div><i class="fas fa-users"></i></div>
        </div>
        <div className='header-right'>
        <div className='AvatarDiv'>
        <Avatar src={ownerImg} />
        <H3>{ownerName}</H3>
        </div>
        <div className='rightIcon'>
        <div><i class="fas fa-bars"></i></div>
        <div><i class="fab fa-facebook-messenger"></i></div>
        <div><i class="fas fa-bell"></i></div>
        <div><i class="fas fa-caret-down"></i></div>
        </div>
        </div>
    </div>)

}

export default Header;