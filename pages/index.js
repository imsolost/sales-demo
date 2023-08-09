import Head from "next/head";
import styled from "styled-components";

import DashboardList from "../components/dashboard-list";
import Header from "../components/header";
import CurrentWitholding from "../components/current-witholding";
import CompleteFormContainer from "../components/complete-form-container";

const StyledIframe = styled.div`
  position: absolute;
  top: 300px;
  left: 250px;
  box-sizing: border-box;
`;

const Tasks = () => {
  return (
    <>
      <Head>
        <title>sales demo</title>
        <meta name="description" content="sales demo example" />
      </Head>
      <div>
        <Header />
        <DashboardList />
        <CompleteFormContainer />
        <CurrentWitholding />
        <StyledIframe>
          <iframe src="https://app.useanvil.com/form/anvil-53/irs-w4" width={650} height={500}></iframe>
        </StyledIframe>
        
      </div>
    </>
  );
};

export default Tasks;
