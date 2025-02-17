import React from 'react';
import '../style/title-wrapper.less';

const TitleWrapper: React.FC<any> = ({ children, style }) => {
  return (
    <h3 className="h3" style={{ ...style }}>
      {children}
    </h3>
  );
};

export default TitleWrapper;
