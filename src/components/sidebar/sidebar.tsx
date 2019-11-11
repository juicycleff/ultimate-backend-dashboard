import * as React from 'react';
import StyledSidebar from './styled/sidebar.styled';

interface Props {
path?: string;
}

const Sidebar: React.FC<Props> = ({ children }) => (
  <StyledSidebar>
    {children}
  </StyledSidebar>
);

export default Sidebar;
