import styled from "styled-components";

const StyledDashboard = styled.div`
  position: absolute;
  top: 50px;
  background-color: #f5f5f5;
  width: 200px;
  height: 100vh;
`

const GreyShape = styled.div`
  position: relative;
  border-radius: 22px;
  background-color: #d6d6d6;
  width: 115px;
  height: 20px;
`

const ListItem = styled.div`
  display: flex;
  margin-top: 10px;
`

const listImages = ['layout', 'inbox', 'mail', 'star', 'filetext', 'grid', 'settings', 'user']

const DashboardList = () => {
  const listItems = listImages.map((image, id) => 
      <ListItem key={id}>
        <img alt={image} src={`/${image}.svg`}/>
        <GreyShape />
      </ListItem>
    )

  return (
    <StyledDashboard>
      <img alt="" src="/home.svg"/>
      Dashboard
      {listItems}      
    </StyledDashboard>
  );
};

export default DashboardList;
