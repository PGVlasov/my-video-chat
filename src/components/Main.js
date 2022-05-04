import { useEffect, useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ACTIONS from "./socket/actions";
import { socket } from "./socket/socket";
import { v4 } from "uuid";
import { useNavigate } from "react-router";

export const Main = () => {
  const [rooms, setRooms] = useState([]);
  const history = useNavigate();
  const rootNode = useRef();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      if (rootNode) {
        setRooms(rooms);
      }
    });
  }, [rooms]);

  const joinRoomHandler = (roomID) => {
    console.log("Join");
    history(`/room/${roomID}`);
  };

  const createRoomHandler = () => {
    console.log("Created");
    history(`/room/${v4()}`);
  };

  return (
    <div style={{ margin: "2rem", alignItems: "center" }}>
      <h2>Avaible Rooms</h2>
      <ul
        style={{
          width: "90%",
          textAlign: "center",
        }}
      >
        {rooms.map((roomID) => (
          <Card key={roomID} style={{ marginTop: "1rem" }}>
            <Card.Body>
              <p>{roomID}</p>

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
