import "./slide.scss";

const Slide = (props:{children:any, anchor?:string, background?:string, display?:string, reverse?:boolean}) => (
  <div id={"anchor-"+props.anchor} className="element Slide">
    {props.children}
    <style jsx>{`
      .Slide {
        ${props.display === "block"?"display: block !important;":""}
        ${props.reverse?"flex-direction: row-reverse;":""}
        background-color: ${props.background};
      }
    `}</style>
  </div>
);

export default Slide;
