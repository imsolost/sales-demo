import styled from "styled-components";
import CompanyName from "./company-name";
import CurrentUser from "./current-user";

const StyledHeader = styled.div`
  position: absolute;
  background-color: #fbfbfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Header = () => {
  return (
    <StyledHeader>
      <CompanyName />
      <CurrentUser />
    </StyledHeader>
  );
};

export default Header;
