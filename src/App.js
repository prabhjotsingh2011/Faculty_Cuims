import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/headerBar/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Redirect, useHistory, Switch } from 'react-router'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Exam_Result_anaysis from './screens/exam_result_analysis/Exam_Result_anaysis';
import Mentoring from './screens/mentoringScreen/Mentoring';
import Certifications from './screens/certifications/Certifications';
import Organized from './screens/OrganizedScreen/Organized';
import PersonalDetails from './screens/PersonalDetails/PersonalDetails';
import Industry_Connections from './screens/Industry_connections/Industry_Connections';
import NotFound from './screens/404/NotFound';
import NavigationState from './contexts/Navigation/NavigationState';
import Feedback from './screens/feedback/Feedback';
import StudentFeedback from './screens/feedback/studentFeedback/StudentFeedback';
import CoordinatorFeedback from './screens/feedback/cordinator feedback/CoordinatorFeedback';
import HeadFeedback from './screens/feedback/head-feedback/HeadFeedback';






export const Layout = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false)

  useEffect(() => {
  }, [toggleSideBar]);
  return (
    <>
      <div className="App">
        <Header
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}

        />

        <div className="app__container flex relative">
          {

            <Sidebar
              toggleSideBar={toggleSideBar}
              setToggleSideBar={setToggleSideBar}
            />

          }


          <div fluid className="app__main ">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}


function App() {

  return (
    <>
      <NavigationState>
        <Switch>
          <Route exact path='/'>
            <Layout >
              <HomeScreen />
            </Layout>
          </Route>

          <Route exact path='/ExamResult'>
            <Layout >
              <Exam_Result_anaysis />
            </Layout>
          </Route>

          <Route exact path='/mentoring'>
            <Layout >
              <Mentoring />
            </Layout>
          </Route>

          <Route exact path='/certification'>
            <Layout >
              <Certifications />
            </Layout>
          </Route>

          <Route exact path='/Organized'>
            <Layout >
              <Organized />
            </Layout>
          </Route>

          <Route exact path='/Personal-details'>
            <Layout >
              <PersonalDetails />
            </Layout>
          </Route>

          <Route exact path='/Industry-connections'>
            <Layout >
              <Industry_Connections />
            </Layout>
          </Route>
          
          <Route exact path='/feedback'>
            <Layout >
              <Feedback />
            </Layout>
          </Route>
          
          <Route exact path='/feedback/students'>
            <Layout >
            
              <StudentFeedback />
            </Layout>
          </Route>
          
          <Route exact path='/feedback/cordinators'>
            <Layout >
              <CoordinatorFeedback />
            </Layout>
          </Route>
          
          <Route exact path='/feedback/head'>
            <Layout >
              <HeadFeedback />
            </Layout>
          </Route>



          <Route >
            <Layout >
              <NotFound />
            </Layout>
          </Route>


        </Switch>
      </NavigationState>
    </>
  );
}

export default App;
