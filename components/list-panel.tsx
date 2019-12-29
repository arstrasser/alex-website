import Panel from '../components/panel';
import './list-panel.scss';

const ListPanel = (props:{children:any}) => (
  <Panel>
    <div className="panel-list-container">
      <ul className="panel-list">
        {props.children}
      </ul>
    </div>
  </Panel>
);

export default ListPanel;
