import { useEffect, useCallback, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams, useMatch, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { TabView, TabPanel } from 'primereact/tabview';

import { fetchCamper } from '../store/campersOps';
import { selectCamperById, selectLoading } from '../store/campersSlice';
import CamperRating from '../components/CamperRating';
import CamperLocation from '../components/CamperLocation';
import { FORMATTER } from '../lib/formatter';

import classes from './CamperPage.module.css';
import BookCamperForm from '../components/BookCamperForm';

function CamperPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const loading = useSelector(selectLoading);
  const featuresSelected = Boolean(useMatch('/catalog/:id'));
  const reviewsSelected = Boolean(useMatch('/catalog/:id/reviews'));
  const selectedTab = featuresSelected ? 0 : reviewsSelected ? 1 : 0;
  const reviewsActionHeaderId = useId();

  const tabChangeHandler = useCallback(
    ({ index }) => {
      const nextPath = index === 0 ? `/catalog/${id}` : `/catalog/${id}/reviews`;
      navigate(nextPath);
    },
    [id, navigate],
  );

  useEffect(() => {
    document.title = 'Camper | Travel Trucks';
  }, []);

  useEffect(() => {
    if (camper && reviewsSelected) {
      document.getElementById(reviewsActionHeaderId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [reviewsSelected, reviewsActionHeaderId, camper]);

  useEffect(() => {
    if (!camper) {
      dispatch(fetchCamper(id));
    }
  }, [camper, dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <div className={classes['camper-page']}>
      <h2 className={clsx(classes['name'], 'h2')}>{camper.name}</h2>
      <div className={classes['rating-location']}>
        <CamperRating camper={camper} />
        <CamperLocation location={camper.location} />
      </div>
      <p className={clsx(classes['price'], 'h2')}>{FORMATTER.format(camper.price)}</p>
      <ul className={classes['gallery']}>
        {camper.gallery.map(({ thumb }, index) => {
          return (
            <li key={thumb}>
              <img
                width={292}
                height={312}
                className={classes['gallery-image']}
                src={thumb}
                alt={`${camper.name} - image ${index}`}
              />
            </li>
          );
        })}
      </ul>
      <p className={clsx(classes['description'], 'body')}>{camper.description}</p>
      <TabView activeIndex={selectedTab} onTabChange={tabChangeHandler} className={classes['tabs']}>
        <TabPanel contentClassName={classes['tab-panel']} header="Features">
          <Outlet />
          <BookCamperForm camper={camper} />
        </TabPanel>
        <TabPanel
          pt={{ headerAction: { id: reviewsActionHeaderId } }}
          contentClassName={classes['tab-panel']}
          header="Reviews"
        >
          <Outlet />
          <BookCamperForm camper={camper} />
        </TabPanel>
      </TabView>
    </div>
  );
}

export default CamperPage;
