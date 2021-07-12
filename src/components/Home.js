import React,{Component} from 'react';
//import App from '../App';
import '../assets/css/index.css';
import logo from '../assets/images/2.jpg';

class Home extends React.Component{
    //数据放在构造函数
    constructor(props){
        super(props);   
        this.state={
            msg:"我是一个home组件",
            title:"我是一个title",
            color:'red',
            funmsg:'这是一个方法',
            style:{
                color:'red',
                fontSize:'40px'
            },
            img:{
                innerWidth:'100px'
            }
        }
    }
    run1(){
        alert(this.state.funmsg);
    }
    run2=()=>{
        alert(this.state.funmsg);
    }
    run3(){
        alert('这是一种方法');
    }
    setData=()=>{
        this.setState({
            msg:"我是一个home组件 ，这是改变后的值"
        })
    }
    setData2=(msg)=>{
        this.setState({
            msg:msg
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <div title="111">我是一个div</div>                          
                <br />
                <div title={this.state.title}>我是一个div</div>
                <br />
                <div className='red'>我是一个红字</div>
                <br />
                <div className={this.state.color}>我是一个红字</div>
                <label htmlFor="name">姓名</label>
                <input id="name"/>
                <br />
                <div style={{"color":"red"}}>这是一个红字</div>
                <br />
                <div style={this.state.style}>这是一个红字</div>
                <br />
                <button onClick={this.run1.bind(this)}>执行方法1</button>
                <br />
                <br />
                <button onClick={this.run2}>执行方法2</button>
                <br />
                <br />
                <button onClick={this.run3}>执行方法3</button>
                <br />
                <br />
                <button onClick={this.setData}>改变值1</button>
                <br />
                <br />
                <button onClick={this.setData2.bind(this,'左琪')}>改变值2</button>
                
            </div>
        )
    }
}



export default Home;


/* class Home extends Component{
    constructor(){
        super();
        //定义数据
        this.state={
            name:"张三",
            age:'30',
            userinfo:{
                username:"zq",
            }
        }
    }


    //jsx  =js + html混写   jsx=javasc xml
    render(){
        return (<div>

            <h2>react组件里面所有节点要被根节点包含</h2>
            <p>姓名--{this.state.name}</p>
            <p>年龄--{this.state.age}</p>
            <p>对象--{this.state.userinfo.username}</p>
        </div>)
    }
}*/