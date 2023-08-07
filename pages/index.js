import Head from "next/head";
import styled from "styled-components";
import DashboardList from "../components/dashboard-list";
import Header from "../components/header";
import CurrentWitholding from "../components/current-witholding";
import CompleteFormContainer from "../components/complete-form-container";

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
      </div>
    </>
  );
};

export default Tasks;
