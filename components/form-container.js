import { Property } from "csstype";
import styled from "styled-components";

const FrameChildRoot = styled.div`
  position: absolute;
  top: 249px;
  left: 435px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(34, 34, 34, 0.15);
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  width: 640px;
  height: 513px;
  height: ${(p) => p.rectangleDivHeight};
`;
const FormContainer = ({ rectangleDivHeight }) => {
  return <FrameChildRoot rectangleDivHeight={rectangleDivHeight} />;
};

export default FormContainer;
