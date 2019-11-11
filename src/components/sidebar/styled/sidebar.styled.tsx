import styled from 'styled-components';

interface StyleSidebarProps {
  theme: any;
}

const StyledSidebar = styled.div<StyleSidebarProps>`
  color: ${({ theme }: StyleSidebarProps) => theme.colors.primaryColor};
`;

export default StyledSidebar;
