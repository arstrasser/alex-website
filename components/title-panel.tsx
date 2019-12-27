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
        white-space: nowrap;
        text-align:center;
      }

      @media (orientation: portrait) {
        .panel-title {
          line-height: calc(50vh - 35px);
        }
      }
    `}</style>
  </Panel>
);

export default TitlePanel;
