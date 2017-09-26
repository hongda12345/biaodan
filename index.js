/*
* @Author: 宏达
* @Date:   2017-09-26 15:24:01
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-26 18:50:20
*/
window.onload=function(){
	let table=document.querySelector('tbody');
	let students=[{name:'张三',age:18,sex:'男',address:'山西大同',phone:1112233},
	{name:'李四',age:20,sex:'女',address:'山西太原',phone:2211333},
	{name:'张岚',age:18,sex:'男',address:'山西晋中',phone:4455665},
	{name:'李鑫',age:18,sex:'女',address:'山西临汾',phone:4477885},
	{name:'吴京',age:18,sex:'男',address:'山西阳泉',phone:4477755},
	];
    students.forEach(element=>{
    	createTr(element);
    })
    function createTr(obj){
    	let trs=document.createElement('tr');
    	trs.innerHTML=`
    	        <td>${obj.name}</td>
				<td>${obj.age}</td>
				<td>${obj.sex}</td>
				<td>${obj.address}</td>
				<td>${obj.phone}</td>
				<td><button>删除</button></td>`;
				table.appendChild(trs);
    }
	table.ondblclick=function(e){
         let element=e.target;
         if(element.nodeName=='TD'){
         	let oldv=element.innerText;
         	element.innerText='';
         	let inputs=document.createElement('input');
         	inputs.value=oldv;
            element.appendChild(inputs);
            inputs.onblur=function(){
            	let newv=this.value.trim();
            	element.removeChild(inputs);
            	inputs=null;
            	if(newv){
            	   element.innerText=newv;
            	}else{
            	element.innerText=oldv;
            }
            }
         }else if(element.nodeName=='BUTTON'){
         	let trs=element.parentNode.parentNode;
         	table.removeChild(trs);
         }
	}
}