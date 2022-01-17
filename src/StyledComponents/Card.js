import Styled from 'styled-components';

const Card = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position : relative;
  max-height: 180px;
  max-width: 110px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 8px;
  margin: 0 5px;
  background-color: white;

  .cardImg{
    margin: 0;
    height: 150px;
    width: 110px;
    border-radius:8px 8px 0 0;
  }
  .storyAvatar{
    position: absolute;
    top: 5px;
    left: 5px;
    border: 3px solid #1597e5;
    padding: 0;
  }
  h4 {
    margin: 5px 20px;
    // margin-top: 20px;
    font-size: 14px;
  }

`
export default Card;