import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
    const { id  } = useParams()
    const navigate=useNavigate()
    return (
        <div>
            <h1>Post {id}</h1>
            <Button size='small' variant="contained" onClick={()=>{navigate('/post')}}>Back</Button>
        </div>

    )
}

export default Post