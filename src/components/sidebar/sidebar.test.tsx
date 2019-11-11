import * as React from 'react';

import Sidebar from './sidebar';

describe('Sidebar', () => {
 it('should render correctly', () => {
   const component = (
     <Sidebar>
       Test
     </Sidebar>
   );

   expect(component).toMatchSnapshot();
 });
});

