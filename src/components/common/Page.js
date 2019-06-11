import React from 'react';
import {css} from 'emotion';
import {Link} from 'react-router-dom';

const Page = (props) => {
  const stylePage = css({
    display: 'flex',
    flexFlow: 'row wrap',
    height: '100%',
    width: '100%'
  });

  return (
    <div className={stylePage}>
      {props.children}
    </div>
  );
};

Page.Body = (props) => {
  const styleBody = css({
    display: 'flex',
    minHeight: 'calc(100% - 60px)',
    padding: '10px 50px 60px 50px',
    position: 'relative',
    width: '100%'
  });

  const styleFooter = css({
    bottom: '5px',
    opacity: '0.5',
    position: 'absolute',
    right: '10px',
    zIndex: 2
  });

  return (
    <div className={`${styleBody} ${props.className && props.className}`}>
      {props.children}
      <span className={styleFooter}>
        Mang'OS Non Commercial (v{props.version})
      </span>
    </div>
  );
};

Page.Header = (props) => {
  const styleHeader = css({
    h1: {
      color: '#FAAE1A',
      fontWeight: 100,
      lineHeight: '50px',
      textAlign: 'center'
    },
    height: '50px',
    width: '100%'
  });

  return (
    <div className={styleHeader}>
      <h1>
        {props.children}
      </h1>
    </div>
  );
};

Page.RightButton = (props) => {
  const styleRightButton = css({
    position: 'absolute',
    right: '0px'
  });

  return (
    <Link className={styleRightButton} to={props.to || ''} onClick={props.onClick}>
      {props.icon}
    </Link>
  );
};

Page.LeftButton = (props) => {
  const styleRightButton = css({
    left: '0px',
    position: 'absolute',
    top: '0px'
  });

  return (
    <Link className={styleRightButton} to={props.to || ''} onClick={props.onClick}>
      {props.icon}
    </Link>
  );
};
export default Page;
