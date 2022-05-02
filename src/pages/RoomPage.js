import { useParams } from "react-router";
import { useWebRTC } from "../components/hooks/useWebRTC";

export const RoomPage = () => {
  const { id: roomID } = useParams();

  useWebRTC(roomID);

  console.log(roomID);

  return <div style={{ margin: "1rem" }}>room</div>;
};
