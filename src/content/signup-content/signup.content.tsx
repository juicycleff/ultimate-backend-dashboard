import {useMutation} from '@apollo/client';
import {Box, Button, Form, FormField, Heading, TextInput} from 'grommet';
import * as React from 'react';
import {useCookies} from 'react-cookie';
import {Link, Redirect, useLocation} from 'react-router-dom';
import {REGISTER_MUTATION} from '../../gql';
import {Inner, Wrapper} from './styles';

interface SignupContentProps {
  path?: string;
}

const SignupContent: React.FC<SignupContentProps> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [register, { loading, data, error }] = useMutation(REGISTER_MUTATION);
  const [cookies] = useCookies(['session.app']);
  const location = useLocation();

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    register({
      variables: {
        email,
        firstname,
        lastname,
        password,
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

  if (!cookies['session.app']) {
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
            <Heading>Signup</Heading>
            <Link to='/login'>Have an account? Login</Link>
          </Box>
          <FormField pad={true}>
            <TextInput
              placeholder='First name'
              value={firstname}
              inputMode='text'
              onChange={(e) => setFirstname(e.target.value)}
            />
          </FormField>
          <FormField pad={true}>
            <TextInput
              placeholder='Last name'
              value={lastname}
              inputMode='text'
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormField>
          <FormField pad={true}>
            <TextInput
              placeholder='Email'
              value={email}
              inputMode='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField pad={true}>
            <TextInput
              placeholder='Password'
              value={password}
              type='password'
              inputMode='text'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <Box pad='small'>
            <Button disabled={loading} primary={true} type='submit' label='Signup' />
          </Box>
          {showError}
        </Form>
      </Inner>
    </Wrapper>
  );
}

export default SignupContent;
