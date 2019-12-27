import Slide from './slide';
import React from 'react';
import { Link } from 'react-scroll';
import "./main-slide.scss";

import { options, imagePrefix } from '../data/home';

class MainSlide extends React.Component {
  state:{current:number, header:string, blink:boolean};
  blinkTimer:NodeJS.Timeout = null;
  timer:NodeJS.Timeout = null;

  constructor(props:any){
    super(props);
    this.state = {current: 0, header: "I am a", blink:true};
    this.blinkTimer = null;
  }

  componentDidMount(){
    if(window.innerWidth > 550){
      this.blink();
      this.timer = setTimeout(()=>this.addToHeader(), 900);
    }else{
      this.setState({current:options.length - 1, header:"Alex Strasser", blink:false});
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    this.noblink();
  }

  blink(){
    let t = 400;
    if(this.state.blink) t = 500;
    this.setState({blink:!this.state.blink});

    this.blinkTimer = setTimeout(()=>this.blink(), t);
  }

  noblink(){
    this.setState({blink: true});
    if(this.blinkTimer){
      clearTimeout(this.blinkTimer);
      this.blinkTimer = null;
    }
  }

  addToHeader(){
    this.noblink();
    //If we already have the whole header typed out
    if(this.state.header == options[this.state.current].header){
      this.blink();
      //If we have reached the last one
      if(this.state.current+1 === options.length){
        this.timer = setTimeout(()=> {
          this.noblink();
          this.setState({blink:false});
        }, 1700);
      }else{
        this.timer = setTimeout(()=>{
          this.setState({current: (this.state.current+1)%options.length});
          this.remFromHeader();
        }, 1800);
      }
    }
    //We still need to add more characters
    else{
      this.setState({
        header: this.state.header + options[this.state.current].header[this.state.header.length]
      });
      this.timer = setTimeout(() => this.addToHeader(), 100+Math.random()*50);
    }
  }

  remFromHeader(){
    this.noblink();
    //If we have removed enough characters, start adding characters again.
    if(options[this.state.current].header.startsWith(this.state.header)){
      this.timer = setTimeout(() => this.addToHeader(), 100+Math.random()*50);
    }
    //Else, we need to remove another characer
    else {
      this.setState({header:this.state.header.substring(0,this.state.header.length-1)});
      this.timer = setTimeout(() => this.remFromHeader(), 50+Math.random()*20);
    }
  }

  render(){

    return (
      <Slide background="rgba(0,0,0,1)" display="block">
        <div>
          <div className="bg">
            {options.map((value, index) => {
              return <img key={index} src={imagePrefix+value.mainImage} style={{opacity:this.state.current == index?1:0}} />
            })}
          </div>
          <div className="gradient">
            <div className="page-header">
              <Link activeClass="active" to={"anchor-"+this.state.current} smooth={true} containerId="scroll-container" duration={1000}>
                <span>{this.state.header}<div className={"cursor "+(this.state.blink?"blink":"blink-off")}></div></span>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
};

export default MainSlide;
