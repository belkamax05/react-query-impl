import { PropsWithChildren } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default async function SamplesLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
