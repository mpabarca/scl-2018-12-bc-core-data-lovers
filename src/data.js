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
          let category=window.data.filterData(data,name);
          console.log(category);
          let p=0;
          let list= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];    
          
          for (let i=0;i<category.length; i++){ //en algun momento i será la cantidad maxima de campeones
              
              let champion=category[i] //objeto  
              
              const infoObject = ((champion || {}).info); //objeto
              const infoArray= Object.entries(infoObject); //array
              
              const statsObject=((champion || {}).stats); //objeto
              const statsArray= Object.entries(statsObject); //array   
  
              for (let j=0;j<4;j++){
                  let n=infoArray[j][1];
                  list[j]+=n;                         
              }
              for (let j=4;j<20;j++){
                  let n=statsArray[j][1];
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