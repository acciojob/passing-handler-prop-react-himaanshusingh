import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;

  function handleClick() {
    selectNextBackground({ background: background });
  }

  return (
    <button className={classname} onClick={handleClick}>{label}</button>
  ); // prettier-ignore
};

export default ColourSelector;
