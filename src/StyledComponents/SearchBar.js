import styled from 'styled-components';

export const SearchBar = styled.input.attrs(props=>({
    type: 'text',
    placeholder: props.placeholder
}))`
border-radius: ${(props)=> props.radius ? props.radius : '0 15px 15px 0' };
border: none;
background-color: #EEF2FF;
margin-left: 10px;
margin-right: 20px;
height: ${(props)=> props.height? props.height : '20px'};
padding: ${(props)=> props.padding? props.padding : '10px 10px 10px 0'};
font-size: 15px;
width: ${(props)=> props.width? props.width : '150px' };
`

export default SearchBar;