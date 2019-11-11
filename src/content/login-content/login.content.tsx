import {useMutation} from '@apollo/client';
import {Box, Button, Form, FormField, Heading, TextInput} from 'grommet';
import * as React from 'react';
import {useCookies} from 'react-cookie';
import {Link, Redirect, useLocation} from 'react-router-dom';
import {LOGIN_MUTATION, ServiceTypes} from '../../gql';
import {Inner, Wrapper} from './styles';

interface LoginContentProps {
  path?: string;
}

const LoginContent: React.FC<LoginContentProps> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, { loading, data, error }] = useMutation(LOGIN_MUTATION);
  const [cookies] = useCookies(['session.app']);
  const location = useLocation();

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login({
      variables: {
        email,
        password,
        service: ServiceTypes.Password,
      }
    }).then(() => {
      // tslint:disable-next-line:no-console
      console.log(data)
    });
  };

  const showError = error && (
    <Box pad='small'>
      {error.graphQLErrors.map((e, i) => <div key={i}>{e.message}</div>)}
    </Box>
  );

  if (cookies['session.app']) {
    return (
      <Redirect
        to={{
          pathname: '/app',
          state: { from: location },
        }}
      />
    );
  }

  return (
    <Wrapper>
      <Inner>
        <Form onSubmit={onSubmit}>
          <Box pad='small' flex='grow' direction='row-responsive' justify='between' align='center'>
            <Heading>Login</Heading>
            <Link to='/signup'>Need an account? Signup</Link>
          </Box>
          <FormField pad={true}>
            <TextInput
              placeholder='Email'
              required={true}
              inputMode='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField pad={true}>
            <TextInput
              placeholder='Password'
              required={true} type='password'
              inputMode='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Box pad='small'>
            <Button primary={true} disabled={loading} type='submit' label='Login' />
          </Box>
          {showError}
        </Form>
      </Inner>
    </Wrapper>
  );
}

export default LoginContent;
