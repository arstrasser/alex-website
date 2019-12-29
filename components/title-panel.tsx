import Panel from '../components/panel';
import React from 'react'
import './title-panel.scss';

const TitlePanel = (props:{background?:string, children:any}) => {
  return (
  <Panel background={props.background}>
    <div className="panel-title">
      {props.children}
    </div>
  </Panel>
)
};

export default TitlePanel;
