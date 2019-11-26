const Slide = (props) => (
  <div className="Slide">
    <div>
      {props.children}
    </div>
    <style jsx>{`
      .Slide {
        height: calc(100vh - 70px);
        width: 100%;
        background-color:${props.background};
        color:white;
      }
    `}</style>
  </div>
);

export default Slide;
