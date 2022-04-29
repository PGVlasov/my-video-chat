import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation("/");
  };

  return (
    <div
      style={{
        marginTop: "7rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>О проекте</h1>
      <p
        style={{
          marginTop: "7rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Данный проэкт создается чисто в учебных целях для приобретения практики
      </p>

      <Button
        style={{ width: "18rem", marginTop: "2rem" }}
        onClick={clickHandler}
      >
        На главную
      </Button>
    </div>
  );
};
