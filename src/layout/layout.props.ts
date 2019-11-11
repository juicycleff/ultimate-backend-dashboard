import { RouteComponentProps } from 'react-router-dom';

export interface LayoutProps extends RouteComponentProps {
  children: any;
  title: string;
}

export interface DefaultLayoutProps extends LayoutProps {}

export interface AppLayoutProps extends LayoutProps {}
