import React from 'react';
import PropTypes from 'prop-types';
import Facebook from 'components/SVG/Facebook';
import Twitter from 'components/SVG/Twitter';
import Instagram from 'components/SVG/Instagram';
import Youtube from 'components/SVG/Youtube';
import Pinterest from 'components/SVG/Pinterest';
import Bloglovin from 'components/SVG/Bloglovin';
import Close from 'components/SVG/Close';
import Search from 'components/SVG/Search';
import Menu from 'components/SVG/Menu';
import ChevronRight from 'components/SVG/ChevronRight';
import More from 'components/SVG/More';
import { WHITE, GREY } from 'constants/colours';

const SVG = ({ size, colour, icon }) => {
  let SVGstyle;

  switch (colour) {
    case 'white':
      SVGstyle = WHITE;
      break;

    case 'grey':
      SVGstyle = GREY;
      break;

    default:
      SVGstyle = WHITE;
  }

  switch (icon) {
    case 'facebook':
      return <Facebook size={size} colour={SVGstyle} />;
    case 'twitter':
      return <Twitter size={size} colour={SVGstyle} />;
    case 'instagram':
      return <Instagram size={size} colour={SVGstyle} />;
    case 'youtube':
      return <Youtube size={size} colour={SVGstyle} />;
    case 'pinterest':
      return <Pinterest size={size} colour={SVGstyle} />;
    case 'bloglovin':
      return <Bloglovin size={size} colour={SVGstyle} />;
    case 'close':
      return <Close size={size} colour={SVGstyle} />;
    case 'search':
      return <Search size={size} colour={SVGstyle} />;
    case 'menu':
      return <Menu size={size} colour={SVGstyle} />;
    case 'chevron-right':
      return <ChevronRight size={size} colour={SVGstyle} />;
    case 'more':
      return <More size={size} colour={SVGstyle} />;
    default:
      return null;
  }
};

SVG.propTypes = {
  size: PropTypes.oneOf([20]).isRequired,
  colour: PropTypes.oneOf(['white', 'grey']).isRequired,
  icon: PropTypes.oneOf([
    'facebook',
    'twitter',
    'instagram',
    'youtube',
    'pinterest',
    'bloglovin',
    'close',
    'search',
    'menu',
    'chevron-right',
    'more',
  ]).isRequired,
};

export default SVG;
