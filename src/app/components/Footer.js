import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function Footer(props) {
  let { year, company } = props;

  return (
    <div>
      <hr/>
      <p>Copyrights, {company}, {year}</p>
    </div>
  )
}


// static

Footer.propTypes = {
  company: PropTypes.string.isRequired, //optional
  year: PropTypes.number //mandatory
}