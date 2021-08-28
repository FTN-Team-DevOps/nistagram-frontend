import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setupHomePage } from '../../../app/page/home/home.actions';
import { homePageSelectors } from '../../../app/page/home/home.selectors';
import { useSelect } from '../../../utils/selector.utils';
import { PageLayout } from '../common/PageLayout';
import { Publications } from '../common/Publications';
import { useHomePageStyle } from './style';

export const HomePage: FunctionComponent = () => {
  const classes = useHomePageStyle();
  const dispatch = useDispatch();

  const publicationIds = useSelect(homePageSelectors.selectSearchedPublications);

  useEffect(() => {
    dispatch(setupHomePage());
  }, [dispatch]);

  return (
    <PageLayout>
      <div className={classes.contentWrapper}>
        <Publications publicationIds={publicationIds} />
      </div>
    </PageLayout>
  );
};
