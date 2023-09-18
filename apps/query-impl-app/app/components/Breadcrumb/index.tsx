'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import classes from './index.module.scss';
import _ from 'lodash';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSplit = useMemo(() => pathname.split('/').filter(path => !!path), [pathname]);

  console.log({pathname, pathSplit})

  const getPathLink = useCallback(
    (index: number) => {
      return `/${pathSplit.slice(0, index+1).join('/')}`;
    },
    [pathSplit]
  );

  return (
    <div className={classes.root}>
      {pathSplit.map((path, index) => {
        return (
          <Link key={path} href={getPathLink(index)}>
            {_.capitalize(path)}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
