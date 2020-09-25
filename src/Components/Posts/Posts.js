import { Button } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        maxWidth: 345,
    },
});


const Posts = (props) => {
    const { id, title, body } = props.post;

    const classes = useStyles();
    return (
        <div >

            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <p><Link to={"/" + id}>
                                <Button variant="contained" color="primary">Show detail</Button>
                            </Link>
                        </p>
                </CardActions>
            </Card>

        </div>
    );

};

export default Posts;
