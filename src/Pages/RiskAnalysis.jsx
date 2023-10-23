import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RiskAnalysis = (props) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
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
              {" "}
              Is there any risk associated with : (ü/û){" "}
              <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="risk"
              id="risk"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
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
              Manufacturing Requirement <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="requirement"
              id="requirement"
              label="Enter Details  "
              variant="outlined"
              fullWidth
              size="small"
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
              Application <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="application"
              id="application"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
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
              Internal Estimation <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="estimation"
              id="estimation"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.25rem",
                padding: "0.3rem",
              }}
            >
              Risk
            </Typography>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.15rem",
                  padding: "0.3rem",
                }}
              >
                Environmental: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Investment: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />

            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Manufacturing: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.25rem",
                padding: "0.3rem",
              }}
            >
              Guidelines
            </Typography>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.15rem",
                  padding: "0.3rem",
                }}
              >
                Technical Feasibility: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Estimation: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />

            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Regret: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="NO" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
              }}
            >
              Remarks
            </Typography>
            <TextField
              name="remarks"
              id="remarks"
              label="Enter Remarks"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RiskAnalysis;