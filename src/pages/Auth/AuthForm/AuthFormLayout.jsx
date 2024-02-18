import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import LoaderMini from '../../../components/Loaders/LoaderMini';
import styles from './AuthForm.module.scss';

const AuthFormLayout = (props) => {
  const {
    authData: { login, password, errors },
    onChangeAuth,
    onSubmit,
    isSubmitting,
  } = props;

  const submitBtnContent = isSubmitting ? <LoaderMini /> : 'Войти';

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Авторизация</h1>
      <label
        className={styles.label}
        htmlFor="login"
      >
        Логин
      </label>
      <Input
        required
        type="text"
        name="login"
        value={login}
        errors={errors}
        onChange={onChangeAuth}
      />
      <label
        className={styles.label}
        htmlFor="password"
      >
        Пароль
      </label>
      <Input
        required
        type="password"
        name="password"
        value={password}
        errors={errors}
        onChange={onChangeAuth}
      />
      <Button
        className={styles.button}
        variant="primary"
        type="submit"
        onClick={onSubmit}
      >
        {submitBtnContent}
      </Button>
    </form>
  );
};

export default AuthFormLayout;
