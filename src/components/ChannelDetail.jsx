import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from './fetchFromApi'

const ChannelDetail = () => {

  const {id}=useParams()

 const [channelDetail,setChannelDetail]=useState(null)
 const [videos,setVideos]=useState([])

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  }, [id])
  
  console.log(channelDetail?.snippet?.thumbnails?.high?.url)
  return (
   <Box minHeight='95vh'>
    <Box>
      <div style={{
        backgroundColor:'red',
        zIndex:10,height:'5px'
      }}/>

      <ChannelCard channelDetail={channelDetail} marginTop='-10px'></ChannelCard>
    </Box>

<Box display='flex' p='2'>
<Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos}/>
</Box>
   </Box>
  )
}

export default ChannelDetail
