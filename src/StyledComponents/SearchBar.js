import styled from 'styled-components';

export const SearchBar = styled.input.attrs({
    type: 'text',
    placeholder: 'Search Facebook'
})`
border-radius:0 15px 15px 0;
border: none;
background-color: #EEF2FF;
margin-right: 20px;
height: 20px;
padding: 10px 10px 10px 0;
font-size: 15px;
`

export default SearchBar;