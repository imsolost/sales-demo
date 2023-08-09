import styled from "styled-components";

import DashboardList from "../components/dashboard-list";
import Header from "../components/header";

const StyledIframe = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  box-sizing: border-box;
`;

const formUrl = "https://app.useanvil.com/form/anvil-53/irs-w4"

const buildURL = (path, dParam) => `${path}?d=${encodeURIComponent(dParam)}`

const exampleData = {
  name: {
    firstName: 'Sally',
    mi: 'W',
    lastName: 'Jones'
  },
  email: 'devrel@useanvil.com',
  socialSecurityNumber: '123456789',
  address: {
    street1: '123 Main St',
    street2: 'Apt. 14', // optional
    city: 'San Francisco',
    state: 'CA',
    zip: '94106',
    country: 'us' // ISO 3166 country code
  }
}

const dParam = JSON.stringify(exampleData)

const url = buildURL(formUrl, dParam)

const FormPage = () => {
  return (
    <div>
      <Header />
      <DashboardList />
      <StyledIframe>
        <iframe src={url} width={650} height={750}></iframe>
      </StyledIframe>
    </div>
  );
};

export default FormPage;