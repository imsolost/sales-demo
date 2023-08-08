import styled from "styled-components";
import CustomButton from "./custom-button";

const StyledContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  border-radius: 5px;
  background-color: #fff9d6;
  border: 1px solid #e0c200;
  box-sizing: border-box;
  width: 300px;
  height: 150px;
`;
const CompleteFormContainer = () => {
  return (
    <StyledContainer>
        <CustomButton />
    </StyledContainer>
  );
};

export default CompleteFormContainer;
