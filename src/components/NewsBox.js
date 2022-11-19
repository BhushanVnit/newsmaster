// import React, { Component } from "react";

// export class NewsBox extends Component {
//   render() {
//     return (
//       <div>
//         <div class="card" style={{width : "18rem"}}>
//           <img src="..." class="card-img-top" alt="..." />
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="/news" class="btn btn-sm btn-primary">
//              Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsBox;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewsBox(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Image"
        height="140"
        image={
          props.imgUrl
            ? props.imgUrl
            : "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.newsUrl}  rel="noopener noreferrer" target="_blank">
          <Button size="small">Share</Button>
        </a>
        <a href={props.newsUrl}  rel="noopener noreferrer" target="_blank">
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}
