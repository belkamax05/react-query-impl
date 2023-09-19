import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const SkeletonWithText = ({
  text,
  ...props
}: SkeletonProps & { text: string }) => {
  return (
    <Skeleton
      wrapper={({ children }) => (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              textAlign: 'center',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {text}
          </span>
        </div>
      )}
      {...props}
    />
  );
};

export default SkeletonWithText;
