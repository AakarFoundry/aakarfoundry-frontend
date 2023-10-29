import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Ecn = (props) => {
  const [formData, setFormData] = useState({
    enquiryNo: "",
    ecnNo:"",
    partName: "",
    number: "",
    weight: "",
    projectName: "",
    ecnType: "",
  });

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Effect to log form data whenever formData changes
  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]); 
   



  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
          mb: 2,
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="on"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Aakar Foundry Enquiry No <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                
                name="enquiryNo"
                id="enquiryNo"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.enquiryNo}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Aakar Foundry Enquiry No - ECN <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="ecnNo"
                id="ecnNo"
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
                value={formData.ecnNo}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Part Name <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="partName"
                id="partName"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.partName}
        onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Part Number - Finish <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="number"
                id="number"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.number}
        onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Finish Weight <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="weight"
                id="weight"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.weight}
        onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                Project Name/Other Details <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="projectName"
                id="projectName"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.projectName}
        onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "1.2rem",
                  padding: "0.3rem",
                }}
              >
                What type of ECN (Change in) <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                
                name="ecnType"
                id="ecnType"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={formData.ecnType}
        onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};


export default Ecn;
