'use client';
import _ from 'lodash';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import classes from './index.module.scss';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSplit = useMemo(
    () => pathname.split('/').filter((path) => !!path),
    [pathname]
  );

  return (
    <div className={classes.root}>
      {pathSplit.map((path, index) => {
        return (
          <Link key={path} href={`/${pathSplit.slice(0, index + 1).join('/')}`}>
            {_.capitalize(path)}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
