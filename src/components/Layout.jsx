import { useCallback, useEffect, useRef } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectError } from '../store/campersSlice';
import Toast from './Toast';

function Layout() {
  const toastRef = useRef(null);
  const errorMessage = useSelector(selectError);
  const getNavLinkClasses = useCallback(
    ({ isActive }) =>
      clsx(classes['nav-link'], 'body2', {
        [classes['nav-link-active']]: isActive,
      }),
    [],
  );

  useEffect(() => {
    if (errorMessage) {
      toastRef.current.show({ severity: 'error', summary: 'Error', detail: errorMessage });
    }
  }, [errorMessage]);

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
      <Toast ref={toastRef} />
    </>
  );
}

export default Layout;
