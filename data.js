window.data ={

  
  //Filtra la data entregada respecto a la condicion dada
  filterData: (data,condition) => {
    const championData=data;
    const category=championData.filter(tipos=>{
    return tipos.tags.indexOf(condition)!==-1;
    });    
    return category;
  },
   
  //Ordena la data entregada respecto a orden alfabetico 
  sortData: (data,sortBy,sortOrder) => {
    const championData=data;
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
  
  //Busca un campion por su id y entrega su data
  findChampion: (data,id) => {
    const lolData = data
    let championInfo;
    for(let i=0; i<lolData.length;i++){
      if(lolData[i].id===id){
       championInfo=lolData[i]
      }
    }
    return championInfo;
    
  },

  //Cálculo del promedio de cada categoria respecto a sus propiedades y el total de campeones
  computeStats: (data) =>{
      let tag=["Assassin","Fighter","Mage","Marksman","Support","Tank"];      
      let list_tag=[];
      for (let m=0;m<tag.length; m++){
          let name= tag[m];
          let category=window.data.filterData(data,name);
          let p=0;
          let list= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];    
          
          for (let i=0;i<category.length; i++){
              
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