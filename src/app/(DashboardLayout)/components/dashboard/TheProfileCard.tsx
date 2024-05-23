import {
  Box,
  CardContent,
  CardMedia,
  Card,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import { IconClock, IconMessageCircle2 } from "@tabler/icons-react";

const ProfileCard = () => {
  return (
    <Card variant="outlined" sx={{ p: 0 }}>
      <CardMedia
        sx={{ height: 225 }}
        image="https://img.freepik.com/free-photo/smiling-female-student-writing-essay-sitting-with-laptop-floor_176420-20219.jpg"
        title="green iguana"
      />
      <CardContent>
        <Box textAlign="center" mt="-80px">
          <Avatar
            src="https://static.vecteezy.com/system/resources/previews/027/312/350/original/portrait-of-a-female-graduate-student-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png"
            sx={{ width: 100, height: 100, m: "0 auto" }}
          />
          <Typography variant="h5" mt={4}>
            Hiya Arora
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={2}>
            Web Designing & Developement
          </Typography>
          <Button variant="contained" color="primary">
            Updates
          </Button>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          mt={7}
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Typography variant="h5">102</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Questions
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5">56</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Lectures Attended
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5">12</Typography>
            <Typography variant="subtitle2" fontSize="12px">
              Tests Given
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
