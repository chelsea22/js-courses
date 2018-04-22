import React from 'react';
import styled from 'styled-components';
import Button from "../Buttons/Button/index";
import MiniLoader from '../Loaders/MiniLoader';
import QuestionItem from "../QuestionItem/Component";
import StyledHeader from '../Common/StyledHeader';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const QuestionList = ({ questions, loader, onIncreaseLimit, setLoader }) => {
  const handleMoreClick = () => {
    setTimeout(onIncreaseLimit, 1000);
    setLoader();
  }
  return(
    <React.Fragment>
      <StyledHeader>Users ask: ({questions.length})</StyledHeader>

      <List>
        {questions.length > 0 ?
          questions.map(question => (
            <QuestionItem key={question._id} question={question} />
          )) : (
            <li>No items found</li>
          )
        }
      </List>
      
      {loader 
        ? <MiniLoader />
        : <Button onClick={handleMoreClick}>More</Button>
      }
    </React.Fragment>
  );
}

export default QuestionList;
