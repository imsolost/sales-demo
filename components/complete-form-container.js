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
`

const FileTextImage = styled.img`
  position: absolute;
  top: 05px;
  right: 10px;
  width: 40px;
  overflow: hidden;
`

const CompleteFormContainer = () => {
  return (
    <StyledContainer>
        Complete Form Container
        <FileTextImage alt="filetext" src="/filetext.svg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <CustomButton />
    </StyledContainer>
  );
};

export default CompleteFormContainer;
