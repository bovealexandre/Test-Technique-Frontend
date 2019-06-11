import React from 'react';
import {css} from 'emotion';
import {Link} from 'react-router-dom';

export default (props) => {
  const [hover, setMouseOver] = React.useState(false);

  const button = css({
    backgroundColor: hover ? 'rgba(250, 174, 26, 1)' : 'rgba(69, 90, 100, 1)',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  });

  const icon = css({
    height: '100%',
    margin: 'auto',
    marginTop: '1em',
    maxHeight: 'calc(100% - 4em)',
    maxWidth: '80%',
    pointerEvents: 'none',
    svg: {
      height: '100%',
      width: '100%'
    },
    width: '100%'
  });

  const title = css({
    backgroundColor: hover ? 'rgba(250, 174, 26, 0.8)' : 'rgba(69, 90, 100, 0.8)',
    bottom: '0px',
    fontSize: '1.5em',
    left: '0px',
    pointerEvents: 'none',
    position: 'absolute',
    textAlign: 'center',
    width: '100%'
  });

  const disabled = css({
    opacity: 0.3,
    pointerEvents: 'none'
  });

  const classNames = `${button} ${props.className} ${props.disabled ? disabled : ''}`;

  return (
    <Link to={props.to || '.'}
      onClick={props.onClick}
      className={classNames}
      style={props.style}
      onMouseOver={() => {
        return setMouseOver(true);
      }}
      onMouseOut={() => {
        return setMouseOver(false);
      }}>
      {props.icon &&
        <span className={icon}>
          {!hover ? props.icon : props.iconHover ? props.iconHover : props.icon}
        </span>
      }
      <span className={title}>
        {props.title}
        {props.children}
      </span>
    </Link>
  );
};
