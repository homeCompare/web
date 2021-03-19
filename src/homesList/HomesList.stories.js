import React from 'react';

import ListPage from '@/pages/list';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

export default {
  title: 'Pages/List',
  component: ListPage,
};

const Template = () => (
  <>
    <Header />
    <ListPage />
    <Footer />
  </>
);

export const HomePage = Template.bind({});
