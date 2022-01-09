import Routing from "./Routing";
import { authActions } from "./store/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendProfileData, fetchProfileData } from "./store/profile-actions";
import { BrowserRouter } from "react-router-dom";
import { fetchPostsData, fetchTrendingPosts } from "./store/post-actions";
import { fetchQuestionsData } from "./store/question-actions";
function App() {
  const isAuth = useSelector((state) => state.auth);
  const aboutData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("idToken") !== null) {
      dispatch(
        authActions.login({
          idToken: localStorage.getItem("idToken"),
          localId: localStorage.getItem("localId"),
        })
      );
    }
  }, []);
  useEffect(() => {
    console.log(isAuth);
    if (!isAuth.isAuthenticated) {
      return;
    }
    console.log("send data is triggered");
    console.log(aboutData);
    dispatch(sendProfileData(aboutData,isAuth.localId))

  },[aboutData])
  useEffect(() => {
    dispatch(fetchTrendingPosts())
  },[])
  useEffect(()=>{
    console.log(isAuth);
    if (!isAuth.isAuthenticated) {
      return;
    }
    console.log("send data is triggered");
    console.log(aboutData);
    dispatch(fetchProfileData(isAuth.localId)).then((res)=>{if(res!==null){
      res.postIds?.map(id=>{console.log("this line is excecuted");(dispatch(fetchPostsData(id)))})
    }});
    dispatch(fetchProfileData(isAuth.localId)).then((res)=>{if(res!==null){
      res.questionIds?.map(id=>{console.log("this line is excecuted");(dispatch(fetchQuestionsData(id)))})
    }});
  
  },[isAuth])
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
