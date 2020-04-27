import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

export default (props) => (
  <div className="columnas-center loading">
    <CircularProgress disableShrink />
  </div>
);
