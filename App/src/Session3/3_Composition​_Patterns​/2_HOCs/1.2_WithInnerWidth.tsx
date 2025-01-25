import { useEffect, useState, ComponentType } from 'react';

interface WithInnerWidthProps {
  innerWidth: number;
}

const withInnerWidth = <P extends object>(Component: ComponentType<P & WithInnerWidthProps>) => (props: P) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Component {...props} innerWidth={innerWidth} />;
};

export default withInnerWidth;