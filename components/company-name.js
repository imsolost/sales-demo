import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled.div`

`;
const CompanyName = () => {
  return (
    <StyledContainer>
      <Link href="/">
        <img alt="logo name" src="/brightpath-hr-logo-1@2x.png" height="40px"/>
      </Link>
    </StyledContainer>
  );
};

export default CompanyName;