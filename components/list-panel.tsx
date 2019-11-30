import Panel from '../components/panel';

const ListPanel = (props) => (
  <Panel>
    <div className="panel-list-container">
      <ul className="panel-list">
        {props.children}
      </ul>
    </div>
    <style jsx>{`
      .panel-list-container {
        display:table;
        height:100%;
      }

      .panel-list {
        display:table-cell;
        vertical-align:middle;
        color:white;
        font-size: 1.5em;
        font-weight: bold;
        line-height: 1.5em;
      }
    `}</style>
  </Panel>
);

export default ListPanel;
