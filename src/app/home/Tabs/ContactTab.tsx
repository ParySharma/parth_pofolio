import React from 'react';
import Header from '@/app/components/Header';
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { Form } from '@/app/others/common';

const ContactTab = ({ title }: any) => {
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      if (
        values?.fname != '' &&
        values?.email !== '' &&
        values?.message !== ''
      ) {
        console.log(values, 'values===>');
        alert('Form submitted successfully');
        formik.resetForm();
      } else {
        alert('Form not submitted, please fill all fields');
      }
    },
  });

  const handleClear = () => {
    formik.resetForm();
  };

  return (
    <div>
      <Header data={title} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            {`  I'm always open to discussing product`}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {` Feel free to contact me for any project or collaboration.`}
          </Typography>
          <Form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              mb={2}
              mt={3}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={9}>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  fullWidth
                  type='text'
                  name='fname'
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                  placeholder='First Name'
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  type='text'
                  fullWidth
                  name='lname'
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  placeholder='Last Name'
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  type='email'
                  fullWidth
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder='Email'
                />
              </Grid>
              <Grid item md={10}>
                <TextareaAutosize
                  name='message'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  minRows={8}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    minWidth: '10%',
                    minHeight: '10px',
                    padding: '12px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                  }}
                  placeholder='Message'
                />
              </Grid>
            </Grid>
            <div>
              <Button
                variant='contained'
                type='submit'
                sx={{ marginRight: '18px' }}
              >
                Submit
              </Button>
              <Button variant='outlined' onClick={handleClear}>
                Clear
              </Button>
            </div>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactTab;
