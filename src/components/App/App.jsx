import { Route, Routes } from 'react-router-dom';
import BettingFormPage from '../../pages/BettingForm/BettingFormPage/BettingFormPage';
import StatisticsPage from '../../pages/Statistics/StatisticsPage/StatisticsPage';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<BettingFormPage />}
        />
        <Route
          path="statistics"
          element={<StatisticsPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
