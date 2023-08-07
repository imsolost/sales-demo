import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import DashboardList from "../components/dashboard-list";
import NavBar from "../components/nav-bar";
import FormContainer from "../components/form-container";
import FormInputs from "../components/form-inputs";

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
const FrameItem = styled.div`
  position: absolute;
  top: 172px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 206px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 262px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 297px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 422px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 21px;
`;
const FrameChild3 = styled.div`
  position: absolute;
  top: 331px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild4 = styled.div`
  position: absolute;
  top: 456px;
  left: 92px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 135px;
  height: 22px;
`;
const FrameChild5 = styled.div`
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
const FrameChild6 = styled.div`
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
const FrameChild7 = styled.div`
  position: absolute;
  top: 909px;
  left: 436px;
  border-radius: 0px 0px 5px 5px;
  background-color: #fbfbfc;
  width: 638px;
  height: 56px;
`;
const Step2Of = styled.div`
  position: absolute;
  top: calc(50% + 437px);
  left: 38.1%;
  font-size: 14px;
  font-family: Barlow;
  color: #a7a7a7;
  text-align: right;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 2.85%;
  width: 1.81%;
  top: 93.79%;
  right: 65.59%;
  bottom: 3.36%;
  left: 32.6%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 2.85%;
  width: 1.81%;
  top: 93.79%;
  right: 63%;
  bottom: 3.36%;
  left: 35.19%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Frame = styled.div`
  position: absolute;
  top: 0px;
  left: -5px;
  width: 1546px;
  height: 982px;
  overflow: hidden;
`;
const CompleteFormRoot = styled.div`
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
const CompleteForm = () => {
  const router = useRouter();

  const onCTADefaultClick = useCallback(() => {
    router.push("/review-and-sign");
  }, [router]);

  return (
    <CompleteFormRoot>
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
        <MarkDaniels>Mark Daniels</MarkDaniels>
        <SoftwareEngineerAt>Software Engineer at SmartTech</SoftwareEngineerAt>
        <FrameItem />
        <FrameInner />
        <RectangleDiv />
        <FrameChild1 />
        <FrameChild2 />
        <FrameChild3 />
        <FrameChild4 />
        <FrameChild5 />
        <LineDiv />
        <FrameChild6 />
        <NavigationmoreVerticalIcon alt="" src="/navigationmore-vertical.svg" />
        <MaskGroupIcon alt="" src="/mask-group1@2x.png" />
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
        <FormContainer rectangleDivHeight="717px" />
        <FrameChild7 />
        <Step2Of>Step 1 of 4</Step2Of>
        <GroupIcon alt="" src="/group-2.svg" />
        <GroupIcon1 alt="" src="/group.svg" />
        <FormInputs />
      </Frame>
    </CompleteFormRoot>
  );
};

export default CompleteForm;
