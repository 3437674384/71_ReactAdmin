import React,{Component} from 'react';
import '../assets/css/index.css';

class Home2 extends React.Component{
    //数据放在构造函数
    constructor(props){
        super(props);   
       
        }
        inputChange=(e)=>{
            console.log(e.target.value);
        }

        render(){
            return(
                <div>
                    <h2>表单事件</h2>
                    <input onChange={this.inputChange}/> 
                    <button>获取input的值</button>
                </div>
            )
        }
    }
    
    
    
    export default Home2;
    