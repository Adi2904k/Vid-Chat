"use client"
import { useSocket } from "@/context/SocketContext";
import { useUser } from "@clerk/nextjs";
import Avatar from "./Avatar";

const ListOnlineUser = () => {
    const {user} = useUser() 
    const {onlineUsers, handleCall} = useSocket()

    return ( 
        <div className="flex gap-4 border-b border-b-primary/10 w-full items-center pb-2">
            {onlineUsers && onlineUsers.map(onlineUsers=>{

                if(onlineUsers.profile.id === user?.id)return null                

                return <div key={onlineUsers.userId} onClick={() => handleCall(onlineUsers)} className="flex flex-col items-center gap-1 cursor-pointer">
                    <Avatar src={onlineUsers.profile.imageUrl} />
                    <div className="text-s ">{onlineUsers.profile.fullName?.split(' ')[0]}</div>

                </div>
            })}

        </div>
     );
}
 
export default ListOnlineUser;