import './panel.scss';

const Panel = (props:{children:any, background?:string}) => (
    <div className="Panel">
      {props.children}

      <style jsx>{`
        .Panel {
          ${props.background?"background: "+props.background+";":""}
          background-size: cover;
          background-position-x: 50%;
        }
      `}</style>
    </div>
  );

export default Panel
