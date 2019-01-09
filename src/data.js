 window.data ={

dataBase: Object.values(LOL.data),


filterData: (dataBase,condition) => {
    const category=data.dataBase.filter(tipos =>{
    return tipos.tags.indexOf(condition)!==-1;
  });
  return category;
},

sortData: (dataBase,sortBy,sortOrder) => {
  if(sortBy==="id" && sortOrder === "a-z" ){
    data.dataBase.sort((a,b)=>{
      if(b.id>a.id){
        return -1;
      }
      if(a.id>b.id){
       return 1;
      }
      return 0;
    });
  }
  if(sortBy==="id" && sortOrder === "z-a" ){
    data.dataBase.sort((a,b)=>{
     if(a.id>b.id){
        return -1;
      }
     if(b.id>a.id){
       return 1;
      }
      return 0;
    });
  }
  return data.dataBase
},

findChampion: (id) => {
  let championInfo;
  for(let i=0; i<dataBase.length;i++){
    if(data.dataBase[i].id===id){
     championInfo=data.dataBase[i]
    }
  }
  return championInfo;
},

computeStats: (dataBase) =>{
  let tag=["Assassin","Fighter","Mage","Marksman","Support","Tank"];      
  let list_tag=[];
  
  for (let m=0;m<tag.length; m++){
      let name= tag[m];
      let categoria=data.filterData(data.dataBase,name);
      let p=0;
      let list= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];    
      
      for (let i=0;i<categoria.length; i++){ //en algun momento i será la cantidad maxima de campeones
          
          let champion=categoria[i] //objeto  
          
          const information1 = ((champion || {}).info); //objeto
          const information= Object.entries(information1); //array
          
          const statics1=((champion || {}).stats); //objeto
          const statics= Object.entries(statics1); //array   

          for (let j=0;j<4;j++){
              let n=information[j][1];
              list[j]+=n;                         
          }
          for (let j=4;j<20;j++){
              let n=statics[j][1];
              list[j]+=n;            
          }
          p+=1;        
      }
      for (let j=0;j<list.length;j++){
          let n= list[j]/p;        
          let t=n.toFixed(2);
          list[j]= t;      
      }           
      list_tag.push(list);
  }
  return list_tag;
}
}
