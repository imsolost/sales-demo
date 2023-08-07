import Head from "next/head";
import { useCallback } from "react";
import styled from "styled-components";
import DashboardList from "../components/dashboard-list";
import NavBar from "../components/nav-bar";
import { useRouter } from "next/router";
import CurrentWitholding from "../components/current-witholding";

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
  left: 359px;
  background-color: #f5f5f5;
  width: 1158px;
  height: 881px;
  opacity: 0.5;
`;
const Dashboard = styled.b`
  position: absolute;
  top: 127px;
  left: 92px;
  line-height: 127.9%;
  color: #3d3d3d;
`;
const YourTasks = styled.b`
  position: absolute;
  top: 164px;
  left: 439px;
  font-size: 36px;
  line-height: 127.9%;
  color: #3d3d3d;
`;
const MarkDaniels = styled.b`
  position: absolute;
  top: 27px;
  left: 1186px;
  font-size: 20px;
  line-height: 127.9%;
`;
const SoftwareEngineerAt = styled.div`
  position: absolute;
  top: 53px;
  left: 1186px;
  font-size: 16px;
  line-height: 127.9%;
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
  top: 265px;
  left: 440px;
  border-radius: 5px;
  background-color: #fff9d6;
  border: 1px solid #e0c200;
  box-sizing: border-box;
  width: 478px;
  height: 205px;
`;
const FrameChild7 = styled.div`
  position: absolute;
  top: 265px;
  left: 947px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  width: 478px;
  height: 205px;
`;
const FrameChild8 = styled.div`
  position: absolute;
  top: 512px;
  left: 440px;
  border-radius: 5px;
  background-color: #d6d6d6;
  width: 985px;
  height: 90px;
  opacity: 0.3;
`;
const FrameChild9 = styled.div`
  position: absolute;
  top: 628px;
  left: 440px;
  border-radius: 5px;
  background-color: #d6d6d6;
  width: 985px;
  height: 90px;
  opacity: 0.3;
`;
const FrameChild10 = styled.div`
  position: absolute;
  top: 743px;
  left: 440px;
  border-radius: 5px;
  background-color: #d6d6d6;
  width: 985px;
  height: 90px;
  opacity: 0.3;
`;
const Text1 = styled.b`
  position: relative;
  font-size: 18.17px;
  font-family: Barlow;
  color: #fff;
  text-align: center;
`;
const ChevronrightIcon = styled.img`
  position: relative;
  border-radius: 4px;
  width: 19.82px;
  height: 19.82px;
  overflow: hidden;
  flex-shrink: 0;
`;
const TextParent = styled.div`
  width: 67.82px;
  height: 22.65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;
const FrameButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10.39013671875px 34.17582702636719px;
  background-color: #3d3d3d;
  position: absolute;
  height: 4.68%;
  width: 9.46%;
  top: 40.02%;
  right: 58.87%;
  bottom: 55.3%;
  left: 31.67%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-start;
`;
const CompleteFormW4 = styled.b`
  position: absolute;
  top: 294px;
  left: 482px;
  line-height: 127.9%;
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 332px;
  left: 482px;
  font-size: 16px;
  line-height: 127.9%;
  display: inline-block;
  width: 307px;
`;
const CheckIcon = styled.img`
  position: absolute;
  top: 538px;
  left: 1362px;
  width: 37px;
  height: 37px;
  overflow: hidden;
`;
const CheckIcon1 = styled.img`
  position: absolute;
  top: 653px;
  left: 1362px;
  width: 37px;
  height: 37px;
  overflow: hidden;
`;
const CheckIcon2 = styled.img`
  position: absolute;
  top: 768px;
  left: 1362px;
  width: 37px;
  height: 37px;
  overflow: hidden;
`;
const FrameChild11 = styled.div`
  position: absolute;
  top: 543px;
  left: 482px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 288px;
  height: 26px;
  opacity: 0.7;
`;
const FrameChild12 = styled.div`
  position: absolute;
  top: 658px;
  left: 482px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 184px;
  height: 26px;
  opacity: 0.7;
`;
const FrameChild13 = styled.div`
  position: absolute;
  top: 773px;
  left: 482px;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 214px;
  height: 26px;
  opacity: 0.7;
`;
const FrameChild14 = styled.div`
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
const FileTextIcon1 = styled.img`
  position: absolute;
  top: 287px;
  left: 832px;
  width: 68px;
  height: 68px;
  overflow: hidden;
`;
const FrameChild15 = styled.div`
  position: absolute;
  top: 291px;
  left: 1350px;
  border-radius: 5px;
  background-color: #d6d6d6;
  width: 46px;
  height: 58px;
  opacity: 0.6;
`;
const Frame = styled.div`
  position: absolute;
  top: 0px;
  left: -5px;
  width: 1522px;
  height: 982px;
  overflow: hidden;
`;
const TasksRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 982px;
  overflow: hidden;
  text-align: left;
  font-size: 21px;
  color: #000;
  font-family: Helvetica;
`;
const Tasks = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/complete-form");
  }, [router]);

  return (
    <>
      <Head>
        <title>sales demo</title>
        <meta name="description" content="sales demo example" />
      </Head>
      <TasksRoot>
        <Screenshot20230801At1144
          alt=""
          src="/screenshot-20230801-at-1144-1@2x.png"
        />
        <Frame>
          <DashboardList />
          <FrameChild />
          <NavBar />
          <Dashboard>Dashboard</Dashboard>
          <YourTasks>Your tasks</YourTasks>
          <MarkDaniels>Mark Daniels</MarkDaniels>
          <SoftwareEngineerAt>
            Software Engineer at SmartTech
          </SoftwareEngineerAt>
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
          <FrameChild7 />
          <FrameChild8 />
          <FrameChild9 />
          <FrameChild10 />
          <FrameButton onClick={onFrameButtonClick}>
            <TextParent>
              <Text1>Start</Text1>
              <ChevronrightIcon alt="" src="/chevronright.svg" />
            </TextParent>
          </FrameButton>
          <CompleteFormW4>Complete Form W-4</CompleteFormW4>
          <LoremIpsumDolor>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </LoremIpsumDolor>
          <CheckIcon alt="" src="/check.svg" />
          <CheckIcon1 alt="" src="/check1.svg" />
          <CheckIcon2 alt="" src="/check1.svg" />
          <FrameChild11 />
          <FrameChild12 />
          <FrameChild13 />
          <FrameChild14 />
          <NavigationmoreVerticalIcon
            alt=""
            src="/navigationmore-vertical.svg"
          />
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
          <FileTextIcon1 alt="" src="/filetext1.svg" />
          <FrameChild15 />
          <CurrentWitholding />
        </Frame>
      </TasksRoot>
    </>
  );
};

export default Tasks;
