import styled from "styled-components";

const StyledHeader = styled.div`
  position: absolute;
  background-color: #fbfbfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 50px;
`;
const Header = () => {
  return <StyledHeader />;
};

export default Header;
