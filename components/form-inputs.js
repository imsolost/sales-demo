import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import CTA from "./c-t-a";

const FieldName1 = styled.b`
  align-self: stretch;
  position: relative;
  font-size: 19.73px;
  font-family: Barlow;
  color: #222;
  text-align: left;
`;
const FieldSubtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 17.26px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
  display: none;
`;
const FieldName = styled.div`
  position: absolute;
  top: 91.32px;
  left: 0px;
  width: 492px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.796991348266602px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.4px;
`;
const FieldName2 = styled.div`
  position: absolute;
  top: 388px;
  left: 0px;
  width: 492px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.796991348266602px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.4px;
`;
const FieldName4 = styled.div`
  position: absolute;
  top: 205px;
  left: 0px;
  width: 492px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.796991348266602px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.4px;
`;
const FieldName7 = styled.b`
  align-self: stretch;
  position: relative;
  font-size: 27.13px;
  font-family: Barlow;
  color: #222;
  text-align: left;
`;
const FieldName6 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 492px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.796991348266602px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.4px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 57.95px;
  left: 0px;
  background-color: #dfb842;
  width: 86.32px;
  height: 6.17px;
`;
const Inputdropdown = styled.input`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 232.44px;
  height: 49.32px;
`;
const Inputdropdown1 = styled.input`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 247.85px;
  width: 232.44px;
  height: 49.32px;
`;
const HomeAddressCopy = styled.div`
  position: absolute;
  top: calc(50% - 12.33px);
  left: 18.5px;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
`;
const HomeAddressCopy1 = styled.div`
  position: absolute;
  top: calc(50% - 12.33px);
  left: 266.35px;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
`;
const Frame = styled.div`
  position: absolute;
  top: 132.01px;
  left: 0px;
  width: 480.29px;
  height: 49.32px;
  overflow: hidden;
`;
const Frame1 = styled.input`
  border: none;
  font-weight: 500;
  font-family: Barlow;
  font-size: 19.73px;
  background-color: transparent;
  position: absolute;
  top: 246px;
  left: 0px;
  width: 480px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const DefaultChild = styled.img`
  position: absolute;
  top: calc(50% - 3.54px);
  right: 15.13px;
  width: 11.1px;
  height: 7.4px;
  display: none;
`;
const NounpersonIcon = styled.img`
  position: relative;
  width: 19.73px;
  height: 19.73px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Placeholder = styled.div`
  position: relative;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
  display: none;
`;
const NounpersonParent = styled.div`
  position: absolute;
  top: calc(50% - 10.94px);
  left: 14.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63px;
`;
const Default = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
  border: 2.5px solid #d2e8ec;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.5;
`;
const FilledChild = styled.img`
  position: absolute;
  top: calc(50% - 3.54px);
  right: 15.13px;
  width: 11.1px;
  height: 7.4px;
`;
const NounpersonIcon1 = styled.img`
  position: relative;
  width: 19.73px;
  height: 19.73px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Placeholder1 = styled.div`
  position: relative;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #222;
  text-align: left;
`;
const NounpersonGroup = styled.div`
  position: absolute;
  top: calc(50% - 11.22px);
  left: 14.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63px;
`;
const Filled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
  border: 2.5px solid #d6d6d6;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
`;
const Error1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
  border: 2.5px solid #fb7578;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
`;
const Placeholder3 = styled.div`
  position: relative;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
`;
const Disabled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #f5f5f5;
  border: 2.5px solid #d6d6d6;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
`;
const Focused = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
  border: 2.5px solid #222;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
`;
const Inputdropdown2 = styled.address`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 152px;
  height: 49px;
`;
const Inputdropdown3 = styled.input`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 164px;
  width: 152px;
  height: 49px;
`;
const Inputdropdown4 = styled.input`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 328px;
  width: 152px;
  height: 49px;
`;
const HomeAddressCopy2 = styled.div`
  position: absolute;
  width: calc(100% - 359px);
  top: calc(50% - 12.5px);
  left: 18px;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
  display: inline-block;
`;
const HomeAddressCopy3 = styled.div`
  position: absolute;
  width: calc(100% - 367px);
  top: calc(50% - 12.5px);
  left: 182px;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
  display: inline-block;
`;
const HomeAddressCopy4 = styled.div`
  position: absolute;
  width: calc(100% - 362px);
  top: calc(50% - 12.5px);
  left: 346px;
  font-size: 19.73px;
  font-weight: 500;
  font-family: Barlow;
  color: #adadad;
  text-align: left;
  display: inline-block;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 308px;
  left: 0px;
  width: 480px;
  height: 49px;
  overflow: hidden;
`;
const DefaultItem = styled.img`
  position: absolute;
  top: calc(50% - 3.7px);
  right: 14.18px;
  width: 11.1px;
  height: 7.4px;
  display: none;
`;
const NounpersonParent2 = styled.div`
  position: absolute;
  top: calc(50% - 11.1px);
  left: 14.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63px;
`;
const FilledItem = styled.img`
  position: absolute;
  top: calc(50% - 3.7px);
  right: 14.18px;
  width: 11.1px;
  height: 7.4px;
`;
const NounpersonParent3 = styled.div`
  position: absolute;
  top: calc(50% - 11.38px);
  left: 14.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63px;
`;
const Inputdropdown5 = styled.div`
  position: relative;
  width: 232.44px;
  height: 49.32px;
`;
const Frame3 = styled.div`
  position: absolute;
  top: 428.69px;
  left: 0px;
  width: 232.44px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const BookmarkBlack24dp1Icon = styled.img`
  position: relative;
  width: 26px;
  height: 26px;
  overflow: hidden;
  flex-shrink: 0;
`;
const MyOrg = styled.div`
  position: relative;
  font-size: 17.33px;
  font-weight: 500;
  font-family: Barlow;
  color: #7a7a7a;
  text-align: left;
`;
const BookmarkBlack24dp1Parent = styled.div`
  width: 197.5px;
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const Frame4 = styled.div`
  position: absolute;
  top: 515px;
  left: 0px;
  width: 479.5px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FieldNameParentRoot = styled.form`
  position: absolute;
  top: 307px;
  left: 504px;
  width: 492px;
  height: 558.16px;
`;
const FormInputs = () => {
  const router = useRouter();

  const onCTADefaultClick = useCallback(() => {
    router.push("/review-and-sign");
  }, [router]);

  return (
    <FieldNameParentRoot>
      <FieldName>
        <FieldName1>Name</FieldName1>
        <FieldSubtitle>Field subtitle</FieldSubtitle>
      </FieldName>
      <FieldName2>
        <FieldName1>Social Security Number</FieldName1>
        <FieldSubtitle>Field subtitle</FieldSubtitle>
      </FieldName2>
      <FieldName4>
        <FieldName1>Address</FieldName1>
        <FieldSubtitle>Field subtitle</FieldSubtitle>
      </FieldName4>
      <FieldName6>
        <FieldName7>Step 1</FieldName7>
        <FieldSubtitle>Field subtitle</FieldSubtitle>
      </FieldName6>
      <FrameChild />
      <Frame>
        <Inputdropdown type="text" />
        <Inputdropdown1 type="text" />
        <HomeAddressCopy>First name</HomeAddressCopy>
        <HomeAddressCopy1>Last name</HomeAddressCopy1>
      </Frame>
      <Frame1 type="text" placeholder="Street" />
      <Frame2>
        <Inputdropdown2>
          <Default>
            <DefaultChild alt="" src="/vector-1.svg" />
            <NounpersonParent>
              <NounpersonIcon alt="" src="/nounperson.svg" />
              <Placeholder>Agency</Placeholder>
            </NounpersonParent>
          </Default>
          <Filled>
            <FilledChild alt="" src="/vector-1.svg" />
            <NounpersonGroup>
              <NounpersonIcon1 alt="" src="/nounperson1.svg" />
              <Placeholder1>Placeholder</Placeholder1>
            </NounpersonGroup>
          </Filled>
          <Error1>
            <FilledChild alt="" src="/vector-1.svg" />
            <NounpersonGroup>
              <NounpersonIcon1 alt="" src="/nounperson1.svg" />
              <Placeholder1>Placeholder</Placeholder1>
            </NounpersonGroup>
          </Error1>
          <Disabled>
            <FilledChild alt="" src="/vector-1.svg" />
            <NounpersonGroup>
              <NounpersonIcon1 alt="" src="/nounperson1.svg" />
              <Placeholder3>Placeholder</Placeholder3>
            </NounpersonGroup>
          </Disabled>
          <Focused>
            <FilledChild alt="" src="/vector-1.svg" />
            <NounpersonGroup>
              <NounpersonIcon1 alt="" src="/nounperson1.svg" />
              <Placeholder3>Placeholder</Placeholder3>
            </NounpersonGroup>
          </Focused>
        </Inputdropdown2>
        <Inputdropdown3 type="text" />
        <Inputdropdown4 type="text" />
        <HomeAddressCopy2>City</HomeAddressCopy2>
        <HomeAddressCopy3>ZIP code</HomeAddressCopy3>
        <HomeAddressCopy4>State</HomeAddressCopy4>
      </Frame2>
      <Frame3>
        <Inputdropdown5>
          <Default>
            <DefaultItem alt="" src="/vector-11.svg" />
            <NounpersonParent2>
              <NounpersonIcon alt="" src="/nounperson2.svg" />
              <Placeholder>Agency</Placeholder>
            </NounpersonParent2>
          </Default>
          <Filled>
            <FilledItem alt="" src="/vector-11.svg" />
            <NounpersonParent3>
              <NounpersonIcon1 alt="" src="/nounperson3.svg" />
              <Placeholder1>Placeholder</Placeholder1>
            </NounpersonParent3>
          </Filled>
          <Error1>
            <FilledItem alt="" src="/vector-11.svg" />
            <NounpersonParent3>
              <NounpersonIcon1 alt="" src="/nounperson3.svg" />
              <Placeholder1>Placeholder</Placeholder1>
            </NounpersonParent3>
          </Error1>
          <Disabled>
            <FilledItem alt="" src="/vector-11.svg" />
            <NounpersonParent3>
              <NounpersonIcon1 alt="" src="/nounperson3.svg" />
              <Placeholder3>Placeholder</Placeholder3>
            </NounpersonParent3>
          </Disabled>
          <Focused>
            <FilledItem alt="" src="/vector-11.svg" />
            <NounpersonParent3>
              <NounpersonIcon1 alt="" src="/nounperson3.svg" />
              <Placeholder3>Placeholder</Placeholder3>
            </NounpersonParent3>
          </Focused>
        </Inputdropdown5>
        <Placeholder3>SSN</Placeholder3>
      </Frame3>
      <Frame4>
        <CTA
          buttonText="Next"
          cTADisabled={false}
          cTAWidth="209.62px"
          cTAHeight="43.16px"
          cTADefaultBackgroundColor="#dfb842"
          cTADefaultBoxSizing="border-box"
          cTADefaultCursor="pointer"
          cTADefaultBorder="none"
          cTAFontSize="19.73px"
          cTADisplay="inline-block"
          cTADisabledBoxSizing="border-box"
          cTAFontSize1="19.73px"
          cTADisplay1="inline-block"
          onCTADefaultClick={onCTADefaultClick}
        />
        <BookmarkBlack24dp1Parent>
          <BookmarkBlack24dp1Icon alt="" src="/bookmark-black-24dp-1.svg" />
          <MyOrg>{`Save & complete later`}</MyOrg>
        </BookmarkBlack24dp1Parent>
      </Frame4>
    </FieldNameParentRoot>
  );
};

export default FormInputs;
