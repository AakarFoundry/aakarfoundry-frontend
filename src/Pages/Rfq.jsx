import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Rfq = (props) => {
  const redAsteriskStyle = {
    color: 'red',
  };
  const [fields, setFields] = useState([
    {
      id: 1,
      label: "Surface Treatment",
      type: "select",
      options: ['Anodizing', 'Chromotising', 'Powder Coating', 'Other'],
      value: "",
    },
    {
      id: 2,
      label: "Surface Treatment Specification",
      value: "",
    },
  ]);

  const addField = () => {
    const newFields = [
      ...fields,
      {
        id: fields.length + 1,
        label: "Surface Treatment",
        type: 'select',
        options: ['Anodizing', 'Chromotising', 'Powder Coating', 'Other'],
        value: "",
      },
      {
        id: fields.length + 2,
        label: "Surface Treatment Specification",
        value: "",
      },

    ];
    setFields(newFields);
  };

  const removeField = (id) => {

    const index = fields.findIndex((field) => field.id === id);
    if (index !== -1) {

      const newFields = fields.filter((_, i) => i < index || i >= index + 2);
      setFields(newFields);
    }
  };

  const handleChange = (id, event) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  };
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

                Part Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="name"
                id="name"
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

                Part Number - MACH <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="partMach"
                id="partMach"
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

                Part Number - CAST <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField
                name="partCast"
                id="partCast"
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
                Finish Weight <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="finishWeight"
                id="weight"
                label=" Enter Details"
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
                Raw Casting Weight <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="castingWeight"
                id="weight"
                label=" Enter Details"
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
                Project Name/Other Details <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="details"
                id="details"
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
                Rfq Enquiry No <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="enquiry"
                id="enquiry"
                label=" Enter Details"
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

                Quantity Per Annum (Nos) <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="quantity"
                id="quantity"
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

                Product Life (in Years) <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField

                name="life"
                id="life"
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
                {" "}
                Process Required (HPDC, LPDC, GDC) <span style={{ color: "red" }}>*</span>
              </Typography>

              <Select
                name="processRequired"
                id="processRequired"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="HPDC">HPDC</MenuItem>
                <MenuItem value="LPDC">LPDC</MenuItem>
                <MenuItem value="GDC">GDC</MenuItem>
              </Select>
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
                {" "}
                Aluminum Alloy Specification <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="alloy"
                id="alloy"
                label=" Enter Details"
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
                Requirements - Raw or Machined <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="machined"
                id="machined"
                label=" Enter Details"
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

                Shot Blasting <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField
                name="blasting"
                id="blasting"
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

                Specific Product & QC Requirements <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                name="productQc"
                id="productQc"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
          {fields.map((field) => (
            <Grid item xs={12} sm={6} key={field.id}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem',
                }}
              >
              {field.label}{field.label.includes('') && <span style={redAsteriskStyle}>*</span>}
              </Typography>
              {field.type === 'select' ? (
                <FormControl variant="outlined" fullWidth size="small">
                  <Select
                    labelId={`${field.id}-label`}
                    id={field.id}
                    variant="outlined"
                    fullWidth
                    value={field.value}
                    onChange={(event) => handleChange(field.id, event)}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (

                <TextField

                  label="Enter Details"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={field.value}
                  onChange={(event) => handleChange(field.id, event)}
                />
              )}
            </Grid>
        ))}
          </Grid>
          <Stack direction="row" spacing={2}>
            {fields.length > 2 && (
              <IconButton
                onClick={() => removeField(fields[fields.length - 2].id)}
              >
                <RemoveIcon />
              </IconButton>
            )}
            {fields.length < 6 && (
              <IconButton onClick={addField}>
                <AddIcon />
              </IconButton>
            )}
          </Stack>
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

                Bought Out Materials Details <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="materials"
                id="materials"
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
                Leak testing & Pressure Requirement <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="pressure"
                id="pressure"
                label=" Enter Details"
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
                Impregnation Required? <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                name="impregnation"
                id="impregnation"
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
                {" "}
                Heat treatment Required?<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="treatment"
                id="treatment"
                label=" Enter Details"
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

                Packaging type <span style={{ color: "red" }}>*</span>
              </Typography>

              <Select
                name="packaging"
                id="packaging"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="Corrugated">Corrugated</MenuItem>
                <MenuItem value="PP">PP</MenuItem>
                <MenuItem value="Plastic">Plastic</MenuItem>
                <MenuItem value="Exports">Exports</MenuItem>
                <MenuItem value="Custom">Custom</MenuItem>
              </Select>
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
                Specify If Custom Packaging  <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="custom"
                id="custom"
                label=" Enter Details"
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

                Delivery Location & Basis <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="delivery"
                id="delivery"
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

                Inco-Terms <span style={{ color: "red" }}>*</span>
              </Typography>
              <Select

                name="works"
                id="works"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="FOB">FOB</MenuItem>
                <MenuItem value="CIF">CIF</MenuItem>
                <MenuItem value="DDP">DDP</MenuItem>
                <MenuItem value="DDU">DDU</MenuItem>
              </Select>
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

                Annual Tonnage - MT <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="tonnage"
                id="tonnage"
                label="Enter Details"
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
                label="Enter Remarks"
                name="remarks"
                id="remarks"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Rfq;
