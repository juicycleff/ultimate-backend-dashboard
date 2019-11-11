import {useMutation} from '@apollo/client';
import * as React from 'react';
import {CREATE_TENANT_MUTATION} from '../../gql';

interface Props {
  path?: string;
}

const DashboardContent: React.FC<Props> = () => {
  const [createTenant, { data, error }] = useMutation(CREATE_TENANT_MUTATION);

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createTenant({
      variables: {
        name: 'Demo tenant'
      }
    }).then(() => {
      // tslint:disable-next-line:no-console
      console.log(data)
      // tslint:disable-next-line:no-console
    }).catch(() => console.log(error));
  };

  return (
    <div>
      DashboardContent content
      <form onSubmit={onSubmit}>
        <button type='submit'>Test</button>
      </form>
    </div>
  )
};

export default DashboardContent;
