import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonInput = ({ disabled, type, onClick }) => {
  const classes = useStyles();

  return (
    <div id="button" className={classes.root}>
      <Button disabled={disabled} type={type} onClick={onClick} variant="contained" color="secondary">
        Próximo
      </Button>
    </div>
  );
}

export default ButtonInput;