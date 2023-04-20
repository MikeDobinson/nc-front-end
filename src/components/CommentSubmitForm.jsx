import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function CommentSubmitForm({ setCommentToAdd }) {
  const [username, setUsername] = useState('');
  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObject = {
      username,
      body: commentBody,
    };
    setCommentToAdd(commentObject);
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          variant="filled"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          required
          id="filled-multiline-flexible"
          label="Comment"
          multiline
          maxRows={4}
          variant="filled"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        />{' '}
      </div>{' '}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
