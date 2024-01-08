import styled from 'styled-components';

interface Props {
  number: number;
}

function CountChip({ number }: Props) {
  return (
    <StyledContainer>
      <StyledContent>{number}</StyledContent>
    </StyledContainer>
  );
}

export default CountChip;

const StyledContainer = styled.div`
  padding: 3px 6px;
  display: inline-flex;
  align-items: center;
  background: #eee;
  border-radius: 4px;
`;

const StyledContent = styled.span`
  color: #787486;
`;
