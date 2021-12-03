
    
let arr=[
    [ " "," "," "],
    [ " "," "," "],
    [ " "," "," "]
    ];
    
    let currentplayer="X";
    let upd=document.querySelector(".current");
    upd.innerText=currentplayer;
    
    function getindex(id){
        id=parseInt(id);
        let row=(id-1)%3;
        let col=Math.floor((id-1)/3);
        return [col,row];
        
    
    }
    function update()
    {
    
     upd.innerText=currentplayer;
     
    }
    function check(){
        console.log(arr);
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i][0]!=" " && arr[i][0]==arr[i][1] && arr[i][2]==arr[i][1])
            {

               alert("winner"+currentplayer ); 
               document.location.reload();
               alert(" Start a new Game" ); 
               return;
            }
               
             
               
    
        }
        for(let i=0;i<arr.length;i++)
        {
            if(arr[0][i]!=" " && arr[0][i]==arr[1][i] && arr[2][i]==arr[1][i])
            {
                alert("winner"+currentplayer ); 
                document.location.reload();
                alert(" Start a new Game" ); 
                return;
               
             }
    
        }
        
            if(arr[0][0]!=" " && arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2])
            {
                alert("winner"+currentplayer ); 
                document.location.reload();
                alert(" Start a new Game" ); 
                return;
               
             }
               
    
            if(arr[2][0]!=" " && arr[2][0]==arr[1][1] && arr[0][2]==arr[1][1])
            {
                alert("winner"+currentplayer ); 
                document.location.reload();
                alert(" Start a new Game" ); 
                return;
                
             }
            
    
            //  if(filled())
            //  {
            //     alert(" Start a new Game" ); 
            //     document.location.reload(); 
            //     return;
               
            //  }
       
        
    }
    function filled(){
        for(let i=0;i<3;i++)
         for(let j=0;j<3;j++){
            if(arr[i][j]==" ")return false;
    
         }
         return true;
          
    }
    
    function play(event)
    {
        
        let index=getindex(event.id);
        let c=index[0];
        let r=index[1];
        if(arr[c][r]!=" "){return ;}
         
        arr[c][r]=currentplayer;
        let curr=document.getElementById(event.id)
        curr.innerText= currentplayer; 
        
    
       
        setTimeout((check)   
        ,100);
    
        setTimeout(() => {
            currentplayer= currentplayer=="X"? "O" :"X";
            console.log(currentplayer);
            update();
        }, 500); 
    
        setTimeout(()=>{
            computer();
           },500);
           
        
        
        
    }
   
    function computer(){
        if(!filled()){
            let n=Math.floor(Math.random()*8)+1;
            console.log(n);
            let event=document.getElementById(""+n);
           
            let index=getindex(event.id);
          
            let c=index[0];
           
         let r=index[1];
         if(arr[c][r]!=" "){ computer (); return;}
          
         arr[c][r]=currentplayer;
         let curr=document.getElementById(event.id)
         curr.innerText= currentplayer; 
         
     
        
         setTimeout((check)   
         ,100);
     
         setTimeout(() => {
             currentplayer= currentplayer=="X"? "O" :"X";
             console.log(currentplayer);
             update();
         }, 100); 
         
    
        }
        else{
            alert(" Start a new Game" ); 
            document.location.reload(); 
            return;
        }
          
         
    }
    

