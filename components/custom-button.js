import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.div`
  position: relative;
  top: 80px;
  left: 100px;
  border-radius: 5px;
  border: 1px solid #e0c200;
  box-sizing: border-box;
  width: 100px;
  height: 30px;
  background-color: #f5f5f5;
`;
const CustomButton = () => {
  return (
    <StyledButton>
      <Link href="/form-page">
        Start
      </Link>
    </StyledButton>
  );
};

export default CustomButton;