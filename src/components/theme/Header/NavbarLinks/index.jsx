import React from 'react';
import Link from 'gatsby-link';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link href="/">Home</Link>
    <Link href="/skill">About</Link>
    <Link href="/contact/">Contact</Link>
  </Wrapper>
);

export default NavbarLinks;
