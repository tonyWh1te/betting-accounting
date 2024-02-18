import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useBetService from '../../../services/BetService.service';
import AuthFormLayout from './AuthFormLayout';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const [authData, setAuthData] = useState({
    login: '',
    password: '',
    errors: false,
  });

  const { setProcess, process, signIn } = useBetService();
  const { login: loginAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onChangeAuth = (e) => {
    const { name, value } = e.target;

    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  const onUserAuth = (user) => {
    const authUser = { token: user.token };

    loginAuth(authUser, () => navigate(from, { replace: true }));
    setProcess('success');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { login, password } = authData;

    const errors = !login || !password;

    setAuthData((prevState) => ({
      ...prevState,
      errors,
    }));

    if (errors) return;

    const user = {
      login,
      password,
    };

    signIn(user)
      .then(onUserAuth)
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const isSubmitting = process === 'loading';

  return (
    <section className={styles.auth}>
      <div className="container">
        <div className={styles.inner}>
          <AuthFormLayout
            onChangeAuth={onChangeAuth}
            onSubmit={onSubmit}
            authData={authData}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
