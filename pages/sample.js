import Head from "next/head";
import Image from "next/image";
import HomeIcon from "../images/HomeIcon";
import styles from "../styles/Sample.module.css";

export default function Sample() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div style={{ backgroundColor: "white" }}>Part1</div>
      <div
        style={{
          backgroundColor: "red",
          width: "50%",
          height: "100vh",
        }}
      >
        Part2
      </div>
      <HomeIcon />
    </div>
  );
}
