import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Box, type BoxProps } from '@mui/material';

type PageProps = {
  children: React.ReactNode;
  title?: string;
  meta?: React.ReactNode;
} & BoxProps;

const defaultProps: Omit<PageProps, 'children'> = {
  title: 'Teja Chundru',
  meta: null,
};

function Page({ children, title = '', meta, ...other }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{`${title}`}</title>
        {meta}
      </Helmet>
      <Box
        {...other}
        sx={{
          backgroundColor: 'd5d5d5',
        }}
      >
        {children}
      </Box>
    </>
  );
}

Page.defaultProps = defaultProps;

export default Page;
