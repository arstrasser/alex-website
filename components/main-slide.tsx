import Slide from './slide';
import React from 'react';
import { Link } from 'react-scroll';

import { options, imagePrefix } from '../data/home';

class MainSlide extends React.Component {
  state:{current:number, header:string, blink:boolean};
  blinkTimer:number = null;
  timer:number = null;

  constructor(){
    super();
    this.state = {current: 0, header: "I am a", blink:true};
    this.blinkTimer = null;
  }

  componentDidMount(){
    this.blink();
    this.timer = setTimeout(()=>this.addToHeader(), 900);
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
      <Slide background="rgba(0,0,0,1)">
        <div>
          <div className="bg">
            {options.map((value, index) => {
              return <img key={index} src={imagePrefix+value.mainImage} style={{opacity:this.state.current == index?1:0}} />
            })}
          </div>
          <div className="gradient">

            <div className="page-header">
              <Link activeClass="active" to={"anchor-"+this.state.current} spy={true} smooth={true} containerId="scroll-container" duration={1000}>
                <a>{this.state.header}<div className={"cursor "+(this.state.blink?"blink":"blink-off")}></div></a>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bg {
            position: relative;
            width:100%;
            height:100%;
          }
          .bg > img {
            display: block;
            position:absolute;
            height: calc(100vh - 70px);
            transition: 2s;
            margin-left: -20%;
          }

          .gradient {
            width:100%;
            height: calc(100vh - 70px);
            background: rgb(255,255,255);
            background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 50%);
            position:relative;
          }

          .blink {
            transition: 0s;
            opacity: 1;
          }

          .blink-off {
            transition: 0.3s;
            opacity: 0;
          }

          .cursor {
            display:inline-block;
            width:10px;
            height: 110px;
            margin-left:10px;
            margin-bottom:-20px;
            background:white;
          }

          .page-header {
            font-size: 100px;
            font-weight: bold;
            display:block;
            padding-top: calc(50vh - 70px - 50px);
            text-align:center;
          }

          a {
            text-decoration: underline;
          }

          a:hover {
            cursor:pointer;
          }

        `}</style>
      </Slide>
    );
  }
};

export default MainSlide;
