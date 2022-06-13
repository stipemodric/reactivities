import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container, Header, List, ListItem, Title } from '@mantine/core';
import { Activity } from './models/activity';
import agent from './app/api/agent';
import LoadingComponent from './layout/LoadingComponent';
import { useUuid } from '@mantine/hooks';
import NavBar from './layout/NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting]

  useEffect(() => {
  agent.Activities.list().then(response => {
    let activities : Activity[] = [];
    response.forEach(activity => {
      activity.date = activity.date.split('T')[0];
      activities.push(activity);
    })
    setActivities(activities);
    setLoading(false);
  })
  }, [])

  if (loading) 
  {
    return <LoadingComponent content = 'Loading app'/>
  }

  // function handleCreateOrEditActivity (activity: Activity) {
  //   activity.id 
  //   ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) 
  //   : setActivities([...activities, {...activity, id: uuid()}]);
  //   setEditMode(false);
  //   setSelectedActivity(activity);
  // }

  return (
    <div className="App">
      
      <Title order={2}> Reactivities </Title>
      <NavBar/>

        <Container style={{marginTop: '7em'}}>
          <List>
            {activities.map(activity => {
             return <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
            })}
          </List>
        </Container>
    </div>
  );
}

export default App;
