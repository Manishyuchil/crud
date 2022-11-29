import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <section id="nav-block">
      <article>
        <Logo />
        <Menu />
      </article>
    </section>
  );
}

export default Navbar
