import { useEffect, useRef } from 'react';
import { Outlet, NavLink, Link, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import classes from './Layout.module.css';
import { selectError } from '../store/campersSlice';
import Toast from './Toast';

function createNavLinkClassesFunction(matchUrlTemplate) {
  return ({ isActive }) =>
    clsx(classes['nav-link'], 'body2', {
      [classes['nav-link-active']]: isActive && matchUrlTemplate,
    });
}

function Layout() {
  const toastRef = useRef(null);
  const errorMessage = useSelector(selectError);
  const homePageActive = Boolean(useMatch('/'));
  const camperPageActive = Boolean(useMatch('/catalog'));

  useEffect(() => {
    if (errorMessage) {
      toastRef.current.show({ severity: 'error', summary: 'Error', detail: errorMessage });
    }
  }, [errorMessage]);

  return (
    <>
      <header className={classes['header']}>
        <Link className={classes['logo-link']} to="/">
          <img src="/logo.svg" alt="Travel Trucks" width={136} height={16} />
        </Link>
        <nav className={classes['nav']}>
          <ul className={classes['nav-list']}>
            <li>
              <NavLink className={createNavLinkClassesFunction(homePageActive)} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={createNavLinkClassesFunction(camperPageActive)} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Toast ref={toastRef} />
    </>
  );
}

export default Layout;
