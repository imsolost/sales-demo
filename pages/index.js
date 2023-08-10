import Head from "next/head";

import DashboardList from "../components/dashboard";
import Header from "../components/header";
import CurrentWitholding from "../components/current-witholding";
import CompleteFormContainer from "../components/complete-form-container";

const IndexPage = () => {
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

export default IndexPage;
