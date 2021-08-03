
    async function show(){
        let d=document.getElementById('search').value
        let res=await fetch(` http://api.serpstack.com/search?access_key=d75debc5333e83ea5ff1e8483f5fed94&query=${d}`)
        let data=await res.json()
       // a=(data.knowledge_graph.description);
        //b=data.organic_results;
        console.log(data);
        return data;
        
    }

    async function shoeFetch(){
        let info= await show()
        append(info)
    } 



    function append(e){
         let disp = document.getElementById('result')
         disp.innerHTML=null;
        let d=e.organic_results
       
        head=document.createElement('h1')
        head.innerHTML= e.knowledge_graph.description
        head.setAttribute('class','head')
        
        disp.append(head);



       

        d.forEach(res=> {
           
            h1=document.createElement('h1')
            h1.innerHTML=res.title
            br=document.createElement('br');
            link=document.createElement('a');
            link.innerHTML=res.url
            link.setAttribute('href',res.url)
            p=document.createElement('p')
            p.innerHTML= res.snippet
            disp.append(h1,br,link,p)
        });
    }
    

     



   //fetch(' http://api.serpstack.com/search? access_key =d75debc5333e83ea5ff1e8483f5fed94& query = mcdonalds')
