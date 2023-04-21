import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as api from '../api';

export default function CommentSubmitForm({
  setComments,
  article_id,
  setCommentToAdd,
  commentToAdd,
}) {
  const [username, setUsername] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [commentErrMess, setCommentErrMess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    if (username && commentBody) {
      api
        .postComment(article_id, { username, body: commentBody })
        .then((comment) => {
          setComments((currComments) => {
            return [comment, ...currComments];
          });
        })
        .then(() => {
          setIsLoading(false);
          setCommentErrMess(null);
          setCommentToAdd(true);
          setUsername('');
          setCommentBody('');
        })
        .catch(() => {
          setIsLoading(false);
          setCommentToAdd(false);
          setCommentErrMess('No user found with that name');
        });
    } else {
      setIsLoading(false);
      setCommentErrMess(
        'Please enter all required information before submitting'
      );
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
          value={username}
          variant="filled"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          required
          id="filled-multiline-flexible"
          label="Comment"
          value={commentBody}
          multiline
          maxRows={4}
          variant="filled"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        />{' '}
      </div>{' '}
      {isLoading ? (
        <div>
          {' '}
          <h3> Loading... </h3>{' '}
        </div>
      ) : commentErrMess ? (
        <div>
          {' '}
          <h3> {commentErrMess} </h3>{' '}
        </div>
      ) : commentToAdd ? (
        <div>
          {' '}
          <h3> Comment Posted! </h3>{' '}
        </div>
      ) : null}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
