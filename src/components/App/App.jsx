import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import RequireAuth from '../RequireAuth/RequireAuth';
import BettingFormPage from '../../pages/BettingForm/BettingFormPage/BettingFormPage';
import StatisticsPage from '../../pages/Statistics/StatisticsPage/StatisticsPage';
import AuthPage from '../../pages/Auth/AuthPage/AuthPage';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/auth"
          element={<AuthPage />}
        />
        <Route element={<RequireAuth />}>
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
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
