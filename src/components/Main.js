import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ACTIONS from "./socket/actions";
import { socket } from "./socket/socket";
import { v4 } from "uuid";
import { useNavigate } from "react-router";

export const Main = () => {
  const [rooms, setRooms] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      setRooms(rooms);
    });
  }, [rooms]); /// chek it

  const joinRoomHandler = (roomID) => {
    console.log("Join");
    history(`/room/${roomID}`);
  };

  const createRoomHandler = () => {
    console.log("Created");
    history(`/room/${v4()}`);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Avaible Rooms</h2>
      <ul
        style={{
          width: "90%",
          textAlign: "center",
        }}
      >
        {rooms.map((roomID) => (
          <Card
            style={{
              width: "90%",
              textAlign: "center",
              margin: "1rem",
            }}
            key={roomID}
          >
            <Card.Body
              style={{
                display: "column",
                width: "90%",
                textAlign: "center",
              }}
            >
              {roomID}
              <p>test</p>
              <Button
                style={{ width: "18rem", marginTop: "2rem" }}
                onClick={() => joinRoomHandler(roomID)}
              >
                JOIN
              </Button>
            </Card.Body>
          </Card>
        ))}
      </ul>
      <Button style={{ margin: "1rem" }} onClick={createRoomHandler}>
        Create new room
      </Button>
    </div>
  );
};
