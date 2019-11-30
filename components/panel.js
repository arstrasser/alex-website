const Panel = (props) => (
    <div className="Panel">
      {props.children}
      <style jsx>{`
        .Panel {
          display:inline-block;
          width: 50%;
          height:calc(100vh - 70px);
          vertical-align:top;
        }
      `}</style>
    </div>
  );

export default Panel
