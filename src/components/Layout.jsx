import { useCallback } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Layout.module.css';

function Layout() {
  const getNavLinkClasses = useCallback(
    ({ isActive }) =>
      clsx(classes['nav-link'], 'body2', {
        [classes['nav-link-active']]: isActive,
      }),
    [],
  );
  return (
    <>
      <header className={classes['header']}>
        <Link className={classes['logo-link']} to="/">
          <img src="/logo.svg" alt="Travel Trucks" />
        </Link>
        <nav className={classes['nav']}>
          <ul className={classes['nav-list']}>
            <li>
              <NavLink className={getNavLinkClasses} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={getNavLinkClasses} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
