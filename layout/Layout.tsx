import React from 'react';
import cn from 'classnames';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar} />
      <main className={styles.body}>{children}</main>
      <Footer className={styles.footer}/>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: React.FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
