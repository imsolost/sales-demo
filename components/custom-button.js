import styled from "styled-components";

const StyledButton = styled.div`
  position: relative;
  top: 100px;
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
        button
    </StyledButton>
  );
};

export default CustomButton;