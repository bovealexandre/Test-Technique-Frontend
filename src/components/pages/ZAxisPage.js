import React from "react";
import {css} from "emotion";
import ButtonFast from "../../assets/ButtonFast_svg";
import ButtonNormal from "../../assets/ButtonNormal_svg";
import ButtonSlow from "../../assets/ButtonSlow_svg";
import ButtonStop from "../../assets/ButtonStop_svg";
import ButtonStopHover from "../../assets/ButtonStopHover_svg";
import ButtonStartPosition from "../../assets/ButtonStartingPosition_svg";
import ButtonStartPositionHover from "../../assets/ButtonStartingPositionHover_svg";
import ButtonUP from "../../assets/ButtonUP";
import ButtonDown from "../../assets/ButtonDown";
import SelectedFast from "../../assets/SelectedFast_svg";
import SelectedNormal from "../../assets/SelectedNormal_svg";
import SelectedSlow from "../../assets/SelectedSlow_svg";
import Page from "../common/Page";
import Home from "../../assets/previous_svg";


export default props => {
  const [selected, setSelected] = React.useState("normal");
  const [stopOver, setStopOver] = React.useState(false);
  const [homeOver, setHomeOver] = React.useState(false);
  const [speed, setSpeed] = React.useState(25);


  const styleBody = css({
    justifyContent: "center",
    margin: "auto 0",
    width: "100%",
    svg: {
      width: "47px",
    },
  });

  const centerBlock = css({
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  });

  const styleGrid = css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    alignItems: "center",
  });
  const styleLeftSidebar = css({
    display: "flex",
    flexDirection: "column",
  });

  const styleRightSidebar = css({
    display: "flex",
    flexDirection: "column",
  });

  const styleCenterSidebar = css({
    display: "flex",
    flexDirection: "column",
    margin: " 0 25px",
  });

  const sliderBlock = css({
    textAlign: "center",
  });

  const slider = css({
    WebkitAppearance: "none",
    width: "365px",
    margin: "15.8px 0",
    background:'transparent',

    "&:focus": {
      outline: "none",
    },
    "&::-webkit-slider-runnable-track": {
      width: "100%",
      height: "8px",
      background: "#3a4751",
      borderRadius: "4px",
    }, 
    "&::-webkit-slider-thumb": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      background: "#ffffff",
      marginTop: "-15px",
      WebkitAppearance: "none",
      appearance:'none'
    },

    "&::-moz-range-track": {
      height: "8px",
      width: "100%",
      background: "#3a4751",
      borderRadius: "4px",
      WebkitAppearance: "none",
    },
    "&::-moz-range-progress" : {
      height:"8px",
      borderBottomLeftRadius:"4px",
      borderTopLeftRadius:"4px",
      background: "#faba00"
    },
    "&::-moz-range-thumb": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      background: "#ffffff",
    },
    "&::-ms-track": {
      width: "100%",
      height: "8px",
      background: "transparent",
      borderColor: "transparent",
      color: "transparent",
    },
    "&::-ms-fill-lower": {
      background: "#493600",
      borderRadius: "2.6px",
    },
    "&::-ms-fill-upper": {
      background: "#624900",
      borderRadius: "2.6px",
    },
    "&::-ms-thumb": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      background: "#ffffff",
    },
    "&:focus::-ms-fill-lower": {
      background: "#624900",
    },
    "&:focus::-ms-fill-upper": {
      background: "#7c5c00",
    },
  });

  const up = css({
    width: "112px",
    height: "47px",
    lineHeight: "47px",
    textAlign: "center",
    backgroundColor: "#465966",
    borderTopLeftRadius: "5%",
    borderTopRightRadius: "5%",
    marginBottom: "2px",
    svg: {
      width: "13px",
    },
  });

  const down = css({
    width: "112px",
    height: "47px",
    textAlign: "center",
    lineHeight: "47px",
    backgroundColor: "#465966",
    borderBottomLeftRadius: "5%",
    borderBottomRightRadius: "5%",
    svg: {
      width: "13px",
    },
  });

  const buttonLeftSidebar = css({
    lineHeight: "0",
  });

  const stop = css({
    marginBottom: "40px",
    lineHeight: "0",
  });

  const start = css({
    lineHeight: "0",
  });

  const speedText = css({
    "&::after": {
      position: "relative",
      display: "block",
      content: '""',
      borderLeft: "20px solid transparent",
      borderRight: "20px solid transparent",
      borderTop: "20px solid #1d2327",
      left: "50%",
      width: "0",
      transform: "translateX(-50%)",
      zIndex: "1",
    },
  });

  const bubble = css({
    background: "#1d2327",
    width: "140px",
    margin: "0 auto",
    fontSize: "25px",
    borderRadius: "5px",
    padding: "1px 3px",
  });
  return (
    <Page>
      <Page.Header>
        Z Axis
        <Page.LeftButton icon={<Home />} to="/control" />
      </Page.Header>
      <Page.Body className={styleBody}>
        <div className={styleGrid}>
          <div className={centerBlock}>
            <div className={styleLeftSidebar}>
              <span
                className={buttonLeftSidebar}
                onClick={() => setSelected("fast")}>
                {selected !== "fast" ? <ButtonFast /> : <SelectedFast />}
              </span>
              <span
                className={buttonLeftSidebar}
                onClick={() => setSelected("normal")}>
                {selected !== "normal" ? <ButtonNormal /> : <SelectedNormal />}
              </span>
              <span
                className={buttonLeftSidebar}
                onClick={() => setSelected("slow")}>
                {selected !== "slow" ? <ButtonSlow /> : <SelectedSlow />}
              </span>
            </div>

            <div className={styleCenterSidebar}>
              <div
                className={up}
                onClick={() =>
                  console.log("mode :", selected, "speed :", speed)
                }>
                <ButtonUP />
              </div>
              <div
                className={down}
                onClick={() =>
                  console.log("mode :", selected, "speed :", speed)
                }>
                <ButtonDown />
              </div>
            </div>

            <div className={styleRightSidebar}>
              <span
                className={stop}
                onMouseOver={() => setStopOver(true)}
                onMouseLeave={() => setStopOver(false)}
                onClick={() => console.log("!stop!")}>
                {!stopOver ? <ButtonStop /> : <ButtonStopHover />}
              </span>
              {/* <ButtonStopHover/> */}
              <span
                className={start}
                onMouseOver={() => setHomeOver(true)}
                onMouseLeave={() => setHomeOver(false)}
                onClick={() => console.log("home")}>
                {!homeOver ? (
                  <ButtonStartPosition />
                ) : (
                  <ButtonStartPositionHover />
                )}
              </span>
              {/* <ButtonStartPositionHover/> */}
            </div>
          </div>
          <div className={sliderBlock}>
            <div className={speedText}>
              <div className={bubble}>{speed} mm</div>
            </div>
            <style>
              {`input{
                background: linear-gradient(to right, #FAAE1A, ${speed/50*100}%, #FAAE1A, ${speed/50*100}%, #37474f, #37474f);
                
              }`}
            </style>
            <input
              type="range"
              className={slider}
              id="slider"
              min="0.001"
              max="50"
              step="0.001"
              defaultValue={speed}
              onChange={e => setSpeed(e.target.value)}
            />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};
