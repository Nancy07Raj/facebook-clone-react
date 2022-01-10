import styled from 'styled-components';

const Avatar = styled.img.attrs(props=>({
    src : props.src
}))`
border-radius: 20px;
height:30px;
width: 30px;
margin: 5px 10px;
box-shadow:1px 1px 0px white;
border: 1px solid #FFF8F3;
`

export default Avatar