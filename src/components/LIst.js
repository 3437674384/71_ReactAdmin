import React from 'react';
class List extends React.Component{
    //数据放在构造函数
    constructor(props){
        super(props);   
       
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
    
    
    
    export default List;
    
