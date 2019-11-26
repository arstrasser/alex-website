const Panel = (props) => (
    <div className="Panel">
      <div className="flip-display">{props.text}</div>
      <style jsx>{`
        .Panel {
          display:inline-block;
          width: 50vw;
          height:100%;
        }
      `}</style>
    </div>
  );

export default Panel
