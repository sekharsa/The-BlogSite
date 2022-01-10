import { useState } from "react";
import classes from "./newprofile.module.css";
import { Tabs, Tab } from "react-bootstrap";
import Postcard from "./Postcard";
import Questionscard from "./Questionscard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOtherProfileData } from "../../store/profile-actions";
import { fetchOtherPostsData } from "../../store/post-actions";
import { fetchOtherQuestionsData } from "../../store/question-actions";
import LoadingSpinner from "../auth/LoadingSpinner";
const ProfileTabs = (props) => {
  const dispatch = useDispatch(); //Intializing the dispatch
  const authStatus = useSelector((state) => state.auth);
  const [tab, setTab] = useState("posts");
  const [submit, setSubmit] = useState(true);
  const [questionsData, setQuestionsData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [curUser, setCurUser] = useState(true);
  console.log(props.uid);
  useEffect(() => {
    console.log("Profile tabs exucuted");
    setSubmit(false);
    if (props.uid === localStorage.getItem("localId")) {
      console.log("Profile tabs exucuted");
      setSubmit(true);
      return;
    }
    setCurUser(false);
    console.log("Profile tabs exucuted");
    dispatch(fetchOtherProfileData(props.uid)).then((res) => {
      console.log(res);
      if (res !== null) {
        res.postIds.map((id) => {
          console.log("this line is excecuted");
          dispatch(fetchOtherPostsData(id)).then((res) => { //fetching posts data of the other users by their ids
            console.log(res);
            if(res !== "failed"){
              setPostsData((state) => [...state, res]);
            }
            
            
          });
        });
        res.questionIds.map((id) => {
          console.log("this line is excecuted");
          dispatch(fetchOtherQuestionsData(id)).then((res) => { //fetching questions data of the other usersby their user ids
            console.log(res);
            setQuestionsData((state) => [...state, res]);
            
          });
        });

      }
      setSubmit(true);
      
    });
  }, []);
  return (submit )?  (
    <div className={classes.container}>
      <div className={classes.profileTabs}>
        <Tabs
          id="profiletab"
          activeKey={tab}
          onSelect={(k) => setTab(k)} //setting tabs on select posts tab for posts and questions tabs for questions
          style={{ borderColor: "#b1b1b1" }}
        >
          <Tab eventKey="posts" title="Posts">
            <Postcard curUser={curUser} postsData={postsData} />
          </Tab>
          <Tab
            eventKey="questions"
            title="Questions"
            style={{ borderColor: "#b1b1b1" }}
          >
            <Questionscard curUser={curUser} questionsData={questionsData} />
          </Tab>
        </Tabs>
      </div>
    </div>
  ):(
    <LoadingSpinner/>
  ) ;
};

export default ProfileTabs;
