import CallNotification from "@/components/CallNotification";
import ListOnlineUser from "@/components/ListOnlineUser";
import VideoCall from "@/components/VideoCall";

export default function Home() {
  return (
    <div>
      <ListOnlineUser />
      <CallNotification />
      <VideoCall />
    </div>
  );
}
