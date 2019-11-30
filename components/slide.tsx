const Slide = (props) => (
  <div id={"anchor-"+props.anchor} className="element Slide">
    {props.children}
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
