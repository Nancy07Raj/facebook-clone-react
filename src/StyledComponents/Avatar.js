import styled from 'styled-components';

const Avatar = styled.img.attrs(props=>({
    src : props.src
}))`
border-radius: 20px;
height:30px;
width: 30px;
margin: ${(props)=> props.margin? props.margin : '5px' };
box-shadow:1px 1px 0px white;
border: 1px solid #92A9BD;
padding: 3px;
`

export default Avatar