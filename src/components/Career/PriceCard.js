import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Divider, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    spacing: 10,
  },
  list: {
    padding: "20px",
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export const PriceCard = React.memo(function PricingCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.department} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {props.title}
        </Typography>
        <div className={classes.list}>
          <Typography align="center">Job ID: {props.job_id}</Typography>
          <Typography align="center">
            Date Posted: {props.psted_date}
          </Typography>
          <Typography align="center">Status: {props.status}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Link
          to={{
            pathname: "/career/jobDesc",
            state: props.job,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Apply
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
});

export default PriceCard;
