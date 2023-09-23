let submit=document.querySelector(".submit");
let form=document.querySelector(".formm");
let name=document.querySelector(".name_field");

let reg=document.querySelector(".reg_field");

let department=document.querySelector(".dept_field");

let teacher=document.querySelector(".teacher_field");


       form.addEventListener('submit',(e)=>{
        alert("dads")
        e.preventDefault();

       
         
       })
       submit.onclick=function()
       {
        if(submit.innerHTML==="Submit")
        {
        form_validation();
        }
       }
function form_validation()
{
    accept_data();
 
}
let datas=[{}];
     function accept_data()
     {
        datas.push({
            names:name.value,
            regs:reg.value,
            deps:department.value,
            teach:teacher.value,

        })
        localStorage.setItem("datas",JSON.stringify(datas));
        console.log(datas)
        createtask();
     }
     function createtask()
     {
        var html="";
      
        datas.forEach(function(element,index)  {
        html+=`<tr>     
            <td>${element.names}</td>
            <td>${element.regs}</td>
            <td>${element.deps}</td>
            <td>${element.teach}</td>
            <td class="btns-col">
                <button class="Delete btns" onClick="dekte('${index}')" >delete</button>
                <button class="Edit btns" onClick="edit('${index}')" >edit</button>
            </td>
    
        </tr>`;

        });
       
        document.querySelector(".table-body").innerHTML=html;
        name.value=""
        reg.value=""
        department.value=""
        teacher.value=""
     }
 
   
     (() => {
        datas = JSON.parse(localStorage.getItem("datas")) || []
        console.log(datas);
     createtask();
     
      })();  
     
    function edit(index)
    {
        submit.innerHTML="save";
        name.value=datas[index].names;
        reg.value=datas[index].regs;
        department.value=datas[index].deps;
        teacher.value=datas[index].teach;
        submit.onclick=function(){
        if(submit.innerHTML==="save")
        {
       
           datas[index].names =name.value;          
           datas[index].regs= reg.value;
           datas[index].deps= department.value;
           datas[index].teach= teacher.value;
       
        }
        submit.innerHTML="Submit"
    
     localStorage.setItem("datas",JSON.stringify(datas));
         createtask();
      
        name.value=""
        reg.value=""
        
        department.value=""
        teacher.value=""
    }
}
function dekte(index)
{
datas.splice(index,1);
localStorage.setItem("datas",JSON.stringify(datas));
createtask();

}
      
