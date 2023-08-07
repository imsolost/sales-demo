import styled from "styled-components";
import DashboardList from "../components/dashboard-list";
import NavBar from "../components/nav-bar";
import FormContainer from "../components/form-container";
import CTA from "../components/c-t-a";

const Screenshot20230801At1144 = styled.img`
  position: absolute;
  top: 996px;
  left: 283px;
  width: 37px;
  height: 12px;
  object-fit: cover;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 101px;
  left: 355px;
  background-color: #f5f5f5;
  width: 1167px;
  height: 881px;
  opacity: 0.5;
`;
const Dashboard = styled.b`
  position: absolute;
  top: 127px;
  left: 92px;
  line-height: 127.9%;
`;
const CompleteFormW4 = styled.b`
  position: absolute;
  top: 164px;
  left: 439px;
  font-size: 36px;
  line-height: 127.9%;
`;
const FieldName1 = styled.b`
  align-self: stretch;
  position: relative;
`;
const FieldSubtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 17.37px;
  font-weight: 500;
  color: #adadad;
  display: none;
`;
const FieldName = styled.div`
  width: 495px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.887218475341797px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.44px;
`;
const FieldName2 = styled.div`
  width: 495px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 14.887218475341797px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.44px;
  margin-top: -28px;
  font-size: 27.29px;
`;
const Frame1 = styled.div`
  width: 495px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 4.962406158447266px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
`;
const FrameItem = styled.div`
  position: relative;
  background-color: #dfb842;
  width: 86.84px;
  height: 6.2px;
`;
const AllDocumentsHave = styled.div`
  align-self: stretch;
  position: relative;
  display: inline-block;
  height: 95px;
  flex-shrink: 0;
`;
const Frame3 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 49px;
`;
const Frame2 = styled.div`
  width: 509px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  font-size: 22.33px;
  color: #000;
  font-family: Helvetica;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 296px;
  left: 504px;
  width: 509px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  font-size: 19.85px;
  color: #222;
  font-family: Barlow;
`;
const MarkDaniels = styled.b`
  position: absolute;
  top: 27px;
  left: 1186px;
  font-size: 20px;
  line-height: 127.9%;
  color: #000;
`;
const SoftwareEngineerAt = styled.div`
  position: absolute;
  top: 53px;
  left: 1186px;
  font-size: 16px;
  line-height: 127.9%;
  color: #000;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 172px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 206px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 262px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 297px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild3 = styled.div`
  position: absolute;
  top: 422px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 21px;
`;
const FrameChild4 = styled.div`
  position: absolute;
  top: 331px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild5 = styled.div`
  position: absolute;
  top: 456px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild6 = styled.div`
  position: absolute;
  top: 365px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 216.5px;
  left: 435.5px;
  border-top: 1px solid #d6d6d6;
  box-sizing: border-box;
  width: 990px;
  height: 1px;
`;
const FrameChild7 = styled.div`
  position: absolute;
  top: -0.5px;
  left: 1093.5px;
  border-right: 1px solid #d6d6d6;
  box-sizing: border-box;
  width: 1px;
  height: 102px;
`;
const NavigationmoreVerticalIcon = styled.img`
  position: absolute;
  top: 35px;
  left: 1470px;
  width: 22px;
  height: 22px;
  overflow: hidden;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 30px;
  left: 1130px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const BrightpathHrLogo1 = styled.img`
  position: absolute;
  top: 33px;
  left: 53px;
  width: 181px;
  height: 38px;
  object-fit: cover;
`;
const BrightpathHrLogo2 = styled.img`
  position: absolute;
  top: 894px;
  left: 48px;
  width: 57px;
  height: 57px;
  object-fit: cover;
`;
const FrameInput = styled.input`
  border: 2px solid #d6d6d6;
  background-color: transparent;
  position: absolute;
  top: 29px;
  left: 813px;
  border-radius: 3px;
  box-sizing: border-box;
  width: 251px;
  height: 42px;
`;
const HomeIcon = styled.img`
  position: absolute;
  top: 126px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const LayoutIcon = styled.img`
  position: absolute;
  top: 170px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const InboxIcon = styled.img`
  position: absolute;
  top: 205px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const MailIcon = styled.img`
  position: absolute;
  top: 261px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const SettingsIcon = styled.img`
  position: absolute;
  top: 420px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const StarIcon = styled.img`
  position: absolute;
  top: 296px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const FileTextIcon = styled.img`
  position: absolute;
  top: 331px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const GridIcon = styled.img`
  position: absolute;
  top: 364px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const UserIcon = styled.img`
  position: absolute;
  top: 455px;
  left: 52px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Frame = styled.div`
  position: absolute;
  top: 0px;
  left: -5px;
  width: 1522px;
  height: 982px;
  overflow: hidden;
`;
const ReviewAndSignRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 982px;
  overflow: hidden;
  text-align: left;
  font-size: 21px;
  color: #3d3d3d;
  font-family: Helvetica;
`;
const ReviewAndSign = () => {
  return (
    <ReviewAndSignRoot>
      <Screenshot20230801At1144
        alt=""
        src="/screenshot-20230801-at-1144-1@2x.png"
      />
      <Frame>
        <DashboardList />
        <FrameChild />
        <NavBar />
        <Dashboard>Dashboard</Dashboard>
        <CompleteFormW4>Complete Form W-4</CompleteFormW4>
        <FormContainer />
        <FrameParent>
          <Frame1>
            <FieldName>
              <FieldName1 />
              <FieldSubtitle>Field subtitle</FieldSubtitle>
            </FieldName>
            <FieldName2>
              <FieldName1>Sign your documents</FieldName1>
              <FieldSubtitle>Field subtitle</FieldSubtitle>
            </FieldName2>
          </Frame1>
          <Frame2>
            <Frame3>
              <FrameItem />
              <AllDocumentsHave>
                All documents have been filled and they are ready to sign! Click
                the button below to kick off the signature process.
              </AllDocumentsHave>
            </Frame3>
            <CTA
              buttonText="Review and Sign"
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
            />
          </Frame2>
        </FrameParent>
        <MarkDaniels>Mark Daniels</MarkDaniels>
        <SoftwareEngineerAt>Software Engineer at SmartTech</SoftwareEngineerAt>
        <FrameInner />
        <RectangleDiv />
        <FrameChild1 />
        <FrameChild2 />
        <FrameChild3 />
        <FrameChild4 />
        <FrameChild5 />
        <FrameChild6 />
        <LineDiv />
        <FrameChild7 />
        <NavigationmoreVerticalIcon alt="" src="/navigationmore-vertical.svg" />
        <MaskGroupIcon alt="" src="/mask-group@2x.png" />
        <BrightpathHrLogo1 alt="" src="/brightpath-hr-logo-1@2x.png" />
        <BrightpathHrLogo2 alt="" src="/brightpath-hr-logo-2@2x.png" />
        <FrameInput type="text" />
        <HomeIcon alt="" src="/home.svg" />
        <LayoutIcon alt="" src="/layout.svg" />
        <InboxIcon alt="" src="/inbox.svg" />
        <MailIcon alt="" src="/mail.svg" />
        <SettingsIcon alt="" src="/settings.svg" />
        <StarIcon alt="" src="/star.svg" />
        <FileTextIcon alt="" src="/filetext.svg" />
        <GridIcon alt="" src="/grid.svg" />
        <UserIcon alt="" src="/user.svg" />
      </Frame>
    </ReviewAndSignRoot>
  );
};

export default ReviewAndSign;
