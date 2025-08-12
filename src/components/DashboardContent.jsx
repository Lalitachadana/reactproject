import React from "react";
import Avatar from "@mui/material";

import { Box, Typography, TextField, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import WorkingHours from "./WorkingHours";
import Sidebar from "./Sidebar";

const DashboardContent = ({ open }) => {
  return (
    <Box sx={{ marginLeft: open ? "250px" : "70px", padding: 2 }}>
     
      <Box sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}>
        <TextField
           variant="outlined"
           placeholder="Search..."
            size="small"
              sx={{ width: 300, backgroundColor: "white" }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 3 }}>
       
        <Box sx={{ flex: 3 }}>
        
          <Box
            sx={{
              display: "flex",
                 justifyContent: "space-between",
                 backgroundColor: "pink",
                 p: 3,
                borderRadius: 2,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Welcome Back, Lalita
              </Typography>
              <Typography>
                Your student completed 85% of tasks
                <br />
                Progress is excellent
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                View Lessons
              </Button>
            </Box>

            <Box>
           
              <img style={{ height: 200 }} src="/girl.png" alt="Welcome" />
            </Box>
          </Box>

    
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            {[
              { img: "/img1.png", title: "Learn UI/UX DESIGN", time: "Tue. 10.00 - 11.00", btn: "Language" },
              { img: "/img2.png", title: "Basic English", time: "Mon. 08.00 - 09.00", btn: "UI/UX Design" },
              { img: "/img3.png", title: "Basic of Digital Marketing", time: "Mon. 01.00 - 03.00", btn: "Marketing" },
            ].map((course, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  border: "2px solid black",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <img style={{ height: 120 }} src={course.img} alt={course.title} />
                <Typography sx={{ mt: 1 }}>{course.title}</Typography>
                <Typography>{course.time}</Typography>
                <Button variant="contained" sx={{ marginTop: 1, backgroundColor: "blue" }}>
                  {course.btn}
                </Button>
              </Box>
            ))}
          </Box>

         
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              variant="contained"
              endIcon={<CheckCircle />}
              sx={{ backgroundColor: "green", fontWeight: "bold", width: 150 }}
              onClick={() => alert("Your course registration is successful")}
            >
              Done
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap}}>
          <WorkingHours />

          {/* */}
            <Box sx={{bgcolor:"white" , color:"black" ,  display: "flex", flexDirection: "column", gap: 3,  border: "1px solid black",
                        borderRadius: 2,  p: 2,}}>
              <Box  sx={{border: "1px solid black",
                        borderRadius: 2,  p: 2,  }}  >  <Typography sx={{fontSize:"bold"}}>    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />Travis fuller </Typography>
                        <p> 64% completed </p></Box>   
              <Box sx={{
                             border: "1px solid black",
                        borderRadius: 2,  p: 2,  }} > keyle Jenner 
                        <p>75% completed</p></Box>


               <Box  sx={{
                             border: "1px solid black",
                        borderRadius: 2,  p: 2,  }}> caleb kardashian <p>30% completed</p></Box>
                 <Box></Box>
                   <Box></Box>
             
                
                
                
                 </Box>  {/* card working downside*/}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
