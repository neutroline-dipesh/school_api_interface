import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { FavoriteBorder } from "@material-ui/icons";
import image from "../../assets/pictures/blog1.jpg";
import { BlogModal } from "./BlogModal";
import IconButton from "@material-ui/core/IconButton";
import BlogData from "./BlogData.json";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#6698FF",
    fontWeight: 1000,
    font: "Nunito Sans",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${image}) `,
    border: "1px solid white",
    width: "100%",
    height: "74vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    position: "center",
    justifyContent: "center",
    color: "#3370ff",
    fontSize: "1em",
    fontWeight: 800,

    [theme.breakpoints.down("sm")]: {
      height: 0,
      fontSize: "3em",
    },
  },
  scltitle: {
    fontFamily: "Open sans condensed",
    fontSize: "4rem",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Blog() {
  const blogs = BlogData.blogs;
  const classes = useStyles();

  // const [activeTab, setActiveTab] = useState("1");

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function callOpenModal(index) {
    setSelectedId(index);
  }

  const [showButton, setShowButton] = useState(false);
  const clickButton = () => {
    setShowButton((prev) => !prev);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  //getting data from database
  const [blog, setBlogs] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/blogs/").then((response) => {
      if (response.data) {
        setBlogs(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(blog);

  return (
    <div className="Blog">
      <Box className={classes.hero} mx="auto">
        <div className={classes.scltitle}>"Our School Blogs"</div>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {blog.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} key="item._id">
                <Card>
                  <CardActionArea
                    className={classes.card}
                    onClick={() => {
                      openModal();
                      callOpenModal(item._id);
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.article}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src={item.image} />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {item.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.posted_date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <IconButton>
                        <FavoriteBorder></FavoriteBorder>
                      </IconButton>

                      {/* <div class="container">
                        <i
                          id="btn"
                          onClick={handleClick}
                          className={click ? "fas fa-heart" : "far fa-heart"}
                        ></i>
                      </div> */}
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={3} />
        </Box>
      </Container>
      <div>
        <BlogModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
}
