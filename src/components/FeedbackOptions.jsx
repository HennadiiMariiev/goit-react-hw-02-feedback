import styled from 'styled-components';

const StyledFeedbackOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const StyledButton = styled.button`
  min-width: 100px;
  background-color: #e6e6e6;
  border: 1px solid #6723ba;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #6723ba;

  margin-bottom: 1rem;

  @media (min-width: 480px) {
    margin-bottom: 0;
  }
`;

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  const buttons = Object.keys(options).map((option, index) => {
    return (
      <StyledButton key={'id' + index} type="button" value={option} onClick={onLeaveFeedback}>
        {option}
      </StyledButton>
    );
  });

  return <StyledFeedbackOptions>{buttons}</StyledFeedbackOptions>;
};

export default FeedbackOptions;
