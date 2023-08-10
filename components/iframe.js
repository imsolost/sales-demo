import styled from "styled-components";

const StyledIframe = styled.div`
  position: absolute;
  top: 100px;
  left: 250px;
  box-sizing: border-box;
`;

const formUrl = "https://app.useanvil.com/form/anvil-53/irs-w4"
const buildURL = (path, dParam) => `${path}?d=${encodeURIComponent(dParam)}`

const Iframe = ({ currentUser }) => {
  const dParam = JSON.stringify(currentUser)
  const url = buildURL(formUrl, dParam)

  return (
    <StyledIframe>
       <iframe src={url} width={650} height={750}></iframe>
    </StyledIframe>
  );
};

export default Iframe;