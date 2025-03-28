import React from 'react';
import Head from 'next/head';
import Welcome from '../components/Home/Welcome';
import Video from '../components/Home/Video';
import Offres from '../components/Home/Offers/Offres';
import Programme from '../components/Home/Programme';
import Contact from '../components/Home/Contact';
import Numbers from '../components/Home/Numbers';
import Tesimonials from '../components/Home/Tesimonials';
import Team from '../components/Home/Team';
import JoinUs from '../components/Home/JoinUs';
import { Link } from '@mui/material';

export function HomeContent({ onOpenModal }) {
  return (
    <>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
        <title>Page d'acceuil</title>
        <meta name="description" content="Bienvenue au centre polyvanlence" />
      </Head>
      <Welcome />
      <Video />
      <Offres onOpenModal={onOpenModal} />
      <Programme />
      <Contact />
      <Numbers />
      <Tesimonials />
      <Team />
      <JoinUs onOpenModal={onOpenModal} />
    </>
  );
}

export default HomeContent;