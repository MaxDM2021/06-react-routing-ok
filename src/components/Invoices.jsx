import { getInvoices } from 'fakeApi';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from './Box';
import { Suspense } from 'react';


const NavItem = styled(NavLink)`
padding: ${p => p.theme.space[3]}px;
text-decoration: none;
color: ${p => p.theme.colors.text};
border-radius: 8px;

&.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${ p => p.theme.colors.white};
}

:hover:not(.active) {
    color: ${ p => p.theme.colors.primary};
}
`;


 const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display="flex" >
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={3}
        borderRight="1px solid black"
      >
        {invoices.map(({ id }) => (
          <NavItem to={`${id}`} key={id}>
            {id}
          </NavItem>
        ))}
      </Box>
      <Suspense fallback={null}>
      <Outlet/>
      </Suspense>
    </Box>
  );
};

export default Invoices