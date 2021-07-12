import React,{Component} from 'react';
import '../assets/css/index.css';

class Todolist extends React.Component{
    //数据放在构造函数
    constructor(props){
        super(props);   
        this.state ={
            list:[]
        };
       }

       addData=()=>{
            //用到this 要注意this指向
            //alert(this.refs.title.value)
            var tempList=this.state.list;
            tempList.push(this.refs.title.value);  //返回值是索引值
            this.setState({list:tempList})
            this.refs.title.value="";
       }
       removeData=(key)=>{
            var tempList=this.state.list;
            tempList.splice(key,1);
            this.setState({list:tempList})
       }
        render(){
            return(
                <div>
                    <h2>Todolist</h2>
                    <input ref="title"/><button onClick={this.addData}>增加+</button>
                    <hr />
                    <ul>                   
                        {
                            this.state.list.map((value,key)=>{
                                return(
                                <li key={key}>{value}  ----<button onClick={this.removeData.bind(this,key)}>删除-</button></li>
                                )    
                            })                                                     
                        }                    
                    </ul>
                </div>
            ); 
        }
    }
    
    
    
    export default Todolist;
    