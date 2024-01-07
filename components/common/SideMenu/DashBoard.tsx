import styled from 'styled-components';
import Crown from '@/public/icon/crown.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { FONT_18, FONT_16 } from '@/styles/FontStyles';
import { GRAY } from '@/styles/ColorStyles';

interface DashBoardProps {
  color: string;
  title: string;
  createdByMe?: boolean;
  current?: boolean;
}

function DashBoard({ color, title, createdByMe, current }: DashBoardProps) {
  return (
    <StyledContainer>
      <StyledColor color={color} />
      <StyledDashBoardTitle current={current}>{title}</StyledDashBoardTitle>
      {createdByMe && <StyledCrown />}
    </StyledContainer>
  );
}

export default DashBoard;

const StyledContainer = styled.div`
  width: 276px;
  height: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  border-radius: 4px;
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 134px;
    height: 43px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`;

const StyledColor = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  margin-right: 16px;
  margin-left: 12px;
  background-color: ${(props: { color: string }) => props.color};
  border-radius: 100%;
`;

const StyledDashBoardTitle = styled.div<{ current?: boolean }>`
  width: 75%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 6px;
  color: ${GRAY[50]};
  ${FONT_18};
  text-decoration: none;
  color: ${(props) => (props.current ? '#5534da' : 'inherit')};
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 60%;
    margin-right: 4px;
    ${FONT_16};
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const StyledCrown = styled(Crown)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;
