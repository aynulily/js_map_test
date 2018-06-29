
var fs=require('fs');
// mytest1.txt 3.78M   mytest11.txt 4B   保证前者读取时间长
var arr=['E:\\mytest1.txt','E:\\mytest11.txt','c'];

arr.map(function(item,index,obj){

    let this_item=item;
    
    console.log("begin    "+this_item +"  ---- "+ index);


    fs.readFile(this_item,function(err){            
       
        if(err){
            console.log("异步回调 err："+this_item+"   "+index+"   "+err.message);          
        } 
        else{
            console.log("异步回调："+this_item+"   "+index);    
        }   
    })
    
    
     console.log("end    "+this_item +"  ---- "+ index);
})


console.log('hahahaha');








