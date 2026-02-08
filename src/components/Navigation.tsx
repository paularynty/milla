import React from 'react';

import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const Logo = styled.h1`
  font-size: 24px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 16px;
`;

export const MenuItem = styled.a`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo>MILLA</Logo>
      <Menu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about-milla">About</MenuItem>
        <MenuItem href="/education">Education</MenuItem>
        <MenuItem href="/case-studies">Case Studies</MenuItem>
        <MenuItem href="/podcast">Podcast</MenuItem>
        <MenuItem href="/resources">Resources</MenuItem>
      </Menu>
    </Nav>
  );
};