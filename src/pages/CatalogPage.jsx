import { useCallback, useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterForm from '../components/FilterForm';
import Button from '../components/Button';
import CampersList from '../components/CampersList';
import { fetchCampers } from '../store/campersOps';
import { selectFilteredCampers, selectLoading } from '../store/campersSlice';
import CampersListSkeleton from '../components/CampersListSkeleton';

import classes from './CatalogPage.module.css';

const CATALOG_PAGE_SIZE = 4;

function CatalogPage() {
  const dispatch = useDispatch();
  const campersFromStore = useSelector(selectFilteredCampers);
  const loading = useSelector(selectLoading);

  const [pageNumber, setPageNumber] = useState(1);
  const campers = useMemo(
    () => campersFromStore?.slice(0, pageNumber * CATALOG_PAGE_SIZE) ?? [],
    [campersFromStore, pageNumber],
  );

  const loadMoreHandler = useCallback(() => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }, []);

  const filterSubmitHandler = useCallback(() => {
    setPageNumber(1);
  }, []);

  useEffect(() => {
    document.title = 'Catalog | Travel Trucks';
  }, []);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={classes['catalog-page']}>
      <div className={classes['filters']}>
        <FilterForm onSubmit={filterSubmitHandler} />
      </div>
      <div className={classes['cards']}>
        {loading && <CampersListSkeleton />}
        {!loading && campers?.length > 0 && <CampersList campers={campers} />}
        {!loading && campers?.length === 0 && <p>No campers found</p>}
        {!loading && campers?.length < campersFromStore?.length && (
          <Button onClick={loadMoreHandler} outlined className={classes['load-more-button']}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
