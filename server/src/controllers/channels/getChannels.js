import User from "../../models/User.js";
import axios from "axios";
export const getChannels = async(req,res) =>{
    try{
        const users  = await User.find({}, {
            channel:1, 
            username:1,
        }).populate("channel");


        const requestData = await axios.get("http://localhost:8000/api/streams");
        const activeStreams = requestData.data;
        //console.log(`the data is ${activeStreams}`);
        let liveStreams =[]

        for(const streamId in activeStreams.live){
            if(activeStreams.live[streamId].publisher && activeStreams.live[streamId].publisher!==null){
                liveStreams.push(streamId);
            }
        }
        const channels = users
        //.filter(u=>u.channel.isActive)
        .map(u=>{
             return {
                id: u.channel._id,
                title: u.channel.title,
                avatarUrl: u.channel.avatarUrl,
                username: u.username,
                isOnline: liveStreams.includes(u.channel.streamKey),
             }
        })
        return res.json({
            channels
        })

    }catch(err){
        return res.status(500).json("Something went wrong")
    }
 
}