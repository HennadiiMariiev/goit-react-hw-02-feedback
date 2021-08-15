import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #e6faf5;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 7px 7px 15px -8px rgba(0, 0, 0, 0.56);
  font-family: Open Sans;
`;

const StyledTitle = styled.h1`
  margin: 0 0 1.5rem;
  text-align: center;
  color: #6723ba;
  text-transform: uppercase;
`;

const Section = (props) => {
  return (
    <StyledSection>
      <StyledTitle>{props.title}</StyledTitle>
      {props.children}
    </StyledSection>
  );
};

export default Section;
