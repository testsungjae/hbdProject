// import hyejin from "./assets/hyejin.jpeg";
import Countdown from "react-countdown";
import videoBg from "./assets/abc.mp4";
import hbdAudio from "./assets/hbdAudio.mp3";

function Title() {
  const Completionist = () => (
    <>
      <span
        style={{
          fontSize: "1.5rem",
          textShadow:
            "0 1px 1px #c0c0c0, 0 2px 0 #a8a7a6, 0 3px 0 #8b8a89, 0 4px 0px #7d7b7a, 0 5px 0px #686766, 0 6px 3px #5f5e5d",
        }}
      >
        Happy Birthday Heijin! 🥳
      </span>
      <audio id="player" controls>
        <source src={hbdAudio} type="audio/mp3" />
      </audio>
    </>
  );
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              backgroundColor: "#413c69",
              fontSize: "25px",
              fontWeight: "700",
              color: "#dcd6f7",
              borderRadius: "15px",
              width: "60px",
              height: "60px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {days}
            <span style={{ fontSize: "15px", color: "#a6b1e1" }}>일</span>
          </div>
          <div
            style={{
              backgroundColor: "#413c69",
              fontSize: "25px",
              fontWeight: "700",
              color: "#dcd6f7",
              borderRadius: "15px",
              width: "60px",
              height: "60px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {hours}
            <span style={{ fontSize: "15px", color: "#a6b1e1" }}>시간</span>
          </div>
          <div
            style={{
              backgroundColor: "#413c69",
              fontSize: "25px",
              fontWeight: "700",
              color: "#dcd6f7",
              borderRadius: "15px",
              width: "60px",
              height: "60px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {minutes}
            <span style={{ fontSize: "15px", color: "#a6b1e1" }}>분</span>
          </div>
          <div
            style={{
              backgroundColor: "#413c69",
              fontSize: "25px",
              fontWeight: "700",
              color: "#dcd6f7",
              borderRadius: "15px",
              width: "60px",
              height: "60px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {seconds}
            <span style={{ fontSize: "15px", color: "#a6b1e1" }}>초</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <video
        src={videoBg}
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          top: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexGrow: 1,
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
            fontFamily: "Apple SD Gothic Neo, Malgun Gothic, sans-serif",
            textShadow:
              "0 1px 1px #c0c0c0, 0 2px 0 #a8a7a6, 0 3px 0 #8b8a89, 0 4px 0px #7d7b7a, 0 5px 0px #686766, 0 6px 3px #5f5e5d",
          }}
        >
          최혜진양의
        </span>
        <span
          style={{
            fontSize: "1.5rem",
            fontFamily: "Apple SD Gothic Neo, Malgun Gothic, sans-serif",
            textShadow:
              "0 1px 1px #c0c0c0, 0 2px 0 #a8a7a6, 0 3px 0 #8b8a89, 0 4px 0px #7d7b7a, 0 5px 0px #686766, 0 6px 3px #5f5e5d",
          }}
        >
          26번째 생일을 축하합니다! 🎉
        </span>
        <Countdown
          date={"04 Aug 2022 00:00:00 GMT"}
          daysInHours={true}
          renderer={renderer}
        ></Countdown>
      </div>
    </div>
  );
}

export default Title;
