'use client';
import {
    Paper,
    Grid,
    Stack,
    Alert,AlertTitle
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

const Alerts = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Course Notification">
            <Stack spacing={2}>
              <Alert severity="error" >
                Submit The code ASAP — check it out!
              </Alert>
              <Alert severity="warning">
                New Course Uploaded— check it out!
              </Alert>
              <Alert severity="info">New Tutor Appointed — check it out!</Alert>
              <Alert severity="success">
                Code Submitted — check it out!
              </Alert>
            </Stack>
          </BaseCard>
        </Grid> 
        <Grid item xs={12} lg={12}>
          <BaseCard title="App Notifications">
            <Stack spacing={2}>
              <Alert severity="error" variant="outlined">
                Update Your APP — check it out!
              </Alert>
              <Alert severity="warning" variant="outlined">
                New Features Coming — check it out!
              </Alert>
              <Alert severity="info" variant="outlined">
                New version introduced — check it out!
              </Alert>
              <Alert severity="success" variant="outlined">
                App updated Successfully — check it out!
              </Alert>
            </Stack>
          </BaseCard>
        </Grid>
        <Grid item xs={12} lg={12}>
          <BaseCard title="General Notifications">
            <Stack spacing={2}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Your performance is going down!! — <strong>check it out!</strong>
              </Alert>
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                New week started — <strong>check it out!</strong>
              </Alert>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Test Tonight!! — <strong>check it out!</strong>
              </Alert>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Result of last test is uploaded — <strong>check it out!</strong>
              </Alert>
            </Stack>
          </BaseCard>
        </Grid>
      </Grid>
    );
  };
  
  export default Alerts;
  
