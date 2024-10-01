import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Posts = () => {
  
  return (
    <>
      <h1>Posts</h1>
      {
        new Array(10).fill(0).map((post, i) => <Card key={i} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Post {i+1}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/post/${i + 1}`}> <Button size="small">Click</Button></Link>
          </CardActions>
        </Card>)
      }
    </>
  )
}

export default Posts