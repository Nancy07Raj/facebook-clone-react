import Styled from 'styled-components';

const Card = Styled.div`
  max-height: 180px;
  min-width: 130px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 8px;
  margin: 0 5px;
  img{
    height: 130px;
    width: 130px;
    margin: 20px 0;
    /* border-radius: 8px; */
  }
  h4 {
    margin: 5px 25px;
    margin-top: 20px;
    font-size: 14px;
  }

`

export default Card;