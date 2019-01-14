window.data ={

  filterData: (data,condition) => {
    const lolData= data;
    const championData= Object.values(lolData.data);
    const category=championData.filter(tipos =>{
    return tipos.tags.indexOf(condition)!==-1;
    });
    return category;
  },
   
  sortData: (data,sortBy,sortOrder) => {
    const lolData= data;
    const championData= Object.values(lolData.data);
    if(sortBy==="id" && sortOrder === "a-z" ){
      championData.sort((a,b)=>{
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
      championData.sort((a,b)=>{
       if(a.id>b.id){
          return -1;
        }
       if(b.id>a.id){
         return 1;
        }
        return 0;
      });
    }
    return championData;
  },
  
  findChampion: (data,id) => {
    const lolData = data
    const championData= Object.values(lolData.data);
    let championInfo;
    for(let i=0; i<championData.length;i++){
      if(championData[i].id===id){
       championInfo=championData[i]
      }
    }
    return championInfo;
    
  },
  
  computeStats: (data) =>{
      let tag=["Assassin","Fighter","Mage","Marksman","Support","Tank"];      
      let list_tag=[];
      for (let m=0;m<tag.length; m++){
          let name= tag[m];
          let categoria=window.data.filterData(data,name);
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