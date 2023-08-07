import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 208px;
  height: 19px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 38px;
  left: 0px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 274px;
  height: 11px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 274px;
  height: 11px;
`;
const RectangleDiv = styled.div`
  position: relative;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 109px;
  height: 11px;
`;
const Frame = styled.div`
  position: absolute;
  height: 33.09%;
  width: 52.55%;
  top: 66.91%;
  right: 47.45%;
  bottom: 0%;
  left: 0%;
  border-radius: 4px;
  background-color: #adadad;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px 17px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 300px;
  left: 986px;
  width: 274px;
  height: 139px;
  opacity: 0.6;
`;
const CurrentWitholding = () => {
  return (
    <RectangleParentRoot>
      <FrameChild />
      <FrameItem />
      <FrameInner />
      <Frame>
        <RectangleDiv />
      </Frame>
    </RectangleParentRoot>
  );
};

export default CurrentWitholding;
