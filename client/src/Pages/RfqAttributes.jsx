import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';




export  function RfqAttributes() {

  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 30,
        mb:2,
      }}
    >

    <Box
  component="form"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  noValidate
  autoComplete="on"
>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={6} >
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Part Name </Typography>
      <TextField
        required
        id="part-name"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small" 
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Part Number - MACH </Typography>

      <TextField
        required
        id="part-number-mach"
        label="Enter Details  "
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Part Number - CAST </Typography>

      <TextField
        required
        id="part-number-cast"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Project Name/Other Details</Typography>

      <TextField
        required
        id="project-details"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Aakar Foundry Enquiry No</Typography>

      <TextField
        required
        id="enquiry-no"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Qty Per Annum (Nos) </Typography>

      <TextField
        required
        id="qty-per-annum"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Product Life (in Years) </Typography>

      <TextField
        required
        id="product-life"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Process Reqd (HPDC, LPDC, GDC) </Typography>

      <TextField
        required
        id="process-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Aluminum Alloy Specification</Typography>

      <TextField
        required
        id="alloy-specification"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} >Requirements - Raw or Machined</Typography>

      <TextField
        required
        id="requirements-raw-or-machined"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Shot Blasting </Typography>

      <TextField
        required
        id="shot-blasting"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Specific Product & QC requirements </Typography>

      <TextField
        required
        id="specific-product-qc-requirements"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Anodizing Required/Chromotising Required? </Typography>

      <TextField
        required
        id="anodizing-required"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Power Coating Required? What Colour? </Typography>

      <TextField
        required
        id="power-coating-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Bought Out Materials Details </Typography>

      <TextField
        required
        id="bought-out-materials-details"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} >Leak testing & Pressure Requirement</Typography>

      <TextField
        required
        id="leak-testing-pressure-requirement"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  >Impregnation Required? </Typography>

      <TextField
        required
        id="impregnation-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > Heat treatment Required?</Typography>

      <TextField
        required
        id="heat-treatment-required"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Packaging - Corrugated/PP/Plastic/Exports Grade?</Typography>

      <TextField
        required
        id="packaging"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Delivery Location & Basis</Typography>

      <TextField
        required
        id="delivery-location-basis"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > (Ex-Works /FOB/CIF/DDP/DDU) </Typography>

      <TextField
        required
        id="delivery-location-basis"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}}  > Annual Tonnage - MT </Typography>

      <TextField
        required
        id="annual-tonnage"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6} >
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem', padding:'0.3rem'}} > First Sample Date * </Typography>
      <TextField
        required
        id="First Sample Date *"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small" 
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > PSW /PPAP Date * </Typography>

      <TextField
        required
        id="PSW /PPAP Date *"
        label="Enter Details  "
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
   <Grid item xs={12} sm={12}> 
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Remark </Typography>
  <TextField
  required
  id="Remark"
 variant="outlined"
  fullWidth
  size="small"
  />
</Grid>
    
  </Grid>
  <Stack direction="row" spacing={5} justifyContent="center"  mt={4} sx={{ mb: 4 }}>
        <Link to={"/customer"}>
        <Button variant="contained"  size="large">
          Back
        </Button>
        </Link>
        <Link to={"/risk"}>
        <Button variant="contained" size="large" >
        Continue
        </Button>
        </Link>
      </Stack>
</Box>
</Container>
  );
}
