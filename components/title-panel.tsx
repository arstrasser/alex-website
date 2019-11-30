import Panel from '../components/panel';
import React from 'react'

const TitlePanel = (props) => (
  <Panel>
    <div className="panel-title">
      {props.children}
    </div>
    <style jsx>{`
      .panel-title {
        color:white;
        font-size: 5em;
        font-weight: bold;
        display:block;
        line-height: calc(100vh - 70px);
        text-align:center;
      }
    `}</style>
  </Panel>
);

export default TitlePanel;
