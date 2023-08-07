import styled from "styled-components";

const FrameChildRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fbfbfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 1522px;
  height: 101px;
`;
const NavBar = () => {
  return <FrameChildRoot />;
};

export default NavBar;
