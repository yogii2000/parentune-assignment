
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { getData } from "./Utils/Api";
function App() {
  const [list,SetList] = useState([])
  useEffect(()=>{
    const initialize = async()=>{
      const response = await getData()
      console.log(response)
      SetList(response.data.content)
    }
    initialize()
  },[])
  return (
    <>
    <div className="bg-white-100">
      <NavBar/> 
      <main className="h-screen p-3">
        {list && list.map((curVal,index)=>{
          return <>
          <h2 key={index} className="font-18 mb-4">{curVal.title}</h2>
          {curVal?.data.map((val,index)=>{
            return <>
            <div className="d-flex gap-3  ">
              <div className="d-flex align-items-center flex-column timeline-container justify-content-center ">
                 <div className="tick-color rounded-circle timeline"></div>
                 {/* {index === list.length-1 ? '': <div className="line timeline-line "></div>} */}
                 <div className="line timeline-line "></div>
              </div>
                <div className="baby-card mb-3">
                  <div>
                  <img src={val.thumb ? val.thumb : val.image} className="img-fluid" height={200} alt="" />
                  </div>
                  <div className="p-4">
                    <div className="d-flex gap-3 justify-content-between">
                      <h3 className="font-16">{val.title ? val.title : val.custom_title}</h3>
                      <span className="text-nowrap">2 min read</span>
                    </div>
                    <div>
                      <div className="line-clamp-3" dangerouslySetInnerHTML={{__html :val?.summary}}></div>
                    </div>
                  </div>
            </div>
            </div>
            </>
          })}
       
          </>
        })}
       
      </main>
    </div>
    </>
  );
}

export default App;
