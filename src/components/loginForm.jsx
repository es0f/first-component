import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
const LoginForm = () => {
    const initValues = {
    username: '',
    password: '',
    };
    const {postLogin} = useAuthentication();
   const doLogin = async () => {
    const result = await postLogin(inputs);
    console.log('Login result:', result);

    if (result?.token) {
        localStorage.setItem('token', result.token);
     console.log('Token saved, redirecting...');
        navigate('/');
    }
    };

    const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
    );

    console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
