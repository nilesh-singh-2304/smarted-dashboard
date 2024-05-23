'use client';
import {
    Paper,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';

const Forms = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Give us Your Important Suggestions">
            <>
            <Stack spacing={3}>
              <TextField
                id="name-basic"
                label="Name"
                variant="outlined"
                defaultValue="Hiya Arora"
              />
              <TextField id="email-basic" label="Email" variant="outlined" />
              <TextField
                id="pass-basic"
                label="Password"
                type="password"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Text Area"
                multiline
                rows={4}
                defaultValue="Type your suggestion here!!"
              />
              
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            <br />
            <Button>
              Submit
            </Button>
            </>
          </BaseCard>
        </Grid>
  
      </Grid>
    );
  };
  
  export default Forms;