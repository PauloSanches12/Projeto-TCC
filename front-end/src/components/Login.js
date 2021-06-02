import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  

  function nextPage(e) {
    e.preventDefault();

    history.push('/Questionario');
    console.log(name);
    console.log(email);
  }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
          Preencha os campos para prosseguir!
        </Typography>
        <form className={classes.form} onSubmit={nextPage} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="nome"
            label="Seu nome"
            type="text"
            id="nome"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Seu email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Próximo
            </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
