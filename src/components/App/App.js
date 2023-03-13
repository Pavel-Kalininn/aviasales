import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, loadTickets } from '../../redux/actions/ticketsAction';
import Header from '../header/header.js';
import TabsList from '../tabsList/tabsList.js';
import Filters from '../filters/filters.js';
import Spinner from '../spinner/spinner.js';
import TicketList from '../ticketList/ticketList.js';

import styles from './App.module.scss';
import './global.scss';

function App() {
  const dispatch = useDispatch();
  const { searchId, isLoading, isError } = useSelector((state) => state.TicketsReducer);
  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (typeof searchId === 'string') {
      dispatch(loadTickets(searchId));
    }
  }, [searchId]);

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header />
      </div>
      <div className={styles.app__wrapper}>
        <aside className={styles.app__aside}>
          <Filters />
        </aside>
        <main className={styles.app__main}>
          {isError ? <span>Что-то пошло не так. {isError}</span> : null}
          <TabsList />
          <Spinner isLoading={isLoading} />
          <TicketList />
        </main>
      </div>
    </div>
  );
}

export default App;
