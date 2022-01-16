import Styled from 'styled-components';

const Card = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 180px;
  min-width: 110px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 8px;
  margin: 0 5px;
  background-color: white;
  img{
    height: 160px;
    width: 110px;
    border-radius:8px 8px 0 0;
    /* margin: 20px 0; */
    /* border-radius: 8px; */
  }
  h4 {
    margin: 5px 20px;
    // margin-top: 20px;
    font-size: 14px;
  }

`

export default Card;