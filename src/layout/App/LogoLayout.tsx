import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import pray4uk from '../../assets/images/pray4uk.jpg';
import CONSTANTS from '../../config/CONSTANTS';
import { FlexListTemplate } from '../../components';

const logoSize = 0.6;
const ratio = 86.0 / 55;

const height = 64;
const imageWidth = height * logoSize * ratio;
const imageHeight = height * logoSize;

const LogoLayout = (): React.ReactElement => {
  return (
    <div className="app-logo--brand">
      <Link className="app-logo-auth" to="/">
        <FlexListTemplate flexWrap="nowrap" gap={5}>
          <img
            className="app-logo--image"
            src={logo}
            alt="EGW Quotes"
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          />
          <div className="app-logo--text">
            <p className="app-logo--title">{CONSTANTS.APP_TITLE}</p>
          </div>
          <img
            className="app-logo--image"
            src={pray4uk}
            alt="Pray4Ukraine"
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          />
        </FlexListTemplate>
      </Link>
    </div>
  );
};

export default LogoLayout;
