import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled.div`

`;
const CompanyName = () => {
  return (
    <StyledContainer>
      <Link href="/">
        BrightPath HR
      </Link>
    </StyledContainer>
  );
};

export default CompanyName;