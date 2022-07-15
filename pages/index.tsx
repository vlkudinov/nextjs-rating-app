import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interface/menu.interface';

const HomePage = ({ menu, firstCategory }: HomeProps) => {
  return (
    <>
      <ul>
        {menu.map((m) => {
          return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
        })}
      </ul>
    </>
  );
};

export default withLayout(HomePage);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
