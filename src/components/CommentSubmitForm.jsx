import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as api from '../api';

export default function CommentSubmitForm({
  setComments,
  article_id,
  comments,
}) {
  const [username, setUsername] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [commentToAdd, setCommentToAdd] = useState(false);
  const [commentErrMess, setCommentErrMess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && commentBody) {
      const commentObject = {
        username,
        body: commentBody,
      };
      api
        .postComment(article_id, commentObject)
        .then((comment) => {
          setComments([comment, ...comments]);
        })
        .catch((err) => {
          console.log(err);
        });
      setCommentToAdd(true);
      setCommentErrMess('');
    } else {
      setCommentErrMess(
        'Please enter all required information before submitting'
      );
    }
  };

  const disableButton = (event) => {
    if (username && commentBody) {
      event.target.disabled = true;
    }
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
      {commentErrMess ? (
        <div>
          <h3>{commentErrMess}</h3>
        </div>
      ) : null}
      <Button onClick={disableButton} type="submit" variant="contained">
        Submit
      </Button>
      {commentToAdd ? (
        <div>
          <li key="added-comment">
            <h3>Comment Posted!</h3>
          </li>
        </div>
      ) : null}
    </Box>
  );
}
