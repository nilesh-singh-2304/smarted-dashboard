import { Box, Avatar, Typography, useMediaQuery,Tooltip, IconButton } from "@mui/material";
export const SidebarProfile = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://c8.alamy.com/comp/2H4NA5F/learning-mathematics-of-education-and-knowledge-background-cartoon-vector-illustration-science-technology-engineering-formula-or-basic-math-2H4NA5F.jpg')`,
        borderRadius: "0 !important",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <>
        <Box px="12px" py="28px" borderRadius="0 !important">
          <Avatar
            alt="Remy Sharp"
            src={"https://static.vecteezy.com/system/resources/previews/027/312/350/original/portrait-of-a-female-graduate-student-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png"}
            sx={{ height: 50, width: 50 }}
          />
        </Box>

        <Box display="flex" alignItems="center" sx={{ py: 1, px: 2, bgcolor: "rgba(0,0,0,0.5)", borderRadius: "0 !important" }}>
          <Typography
            variant="h6"
            fontSize="13px"
            color="white"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Hiya Arora
          </Typography>
        </Box>
      </>
    </Box>
  );
};
