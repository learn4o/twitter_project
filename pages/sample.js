import Head from "next/head";
import Image from "next/image";
import HomeIcon from "../images/HomeIcon";
import styles from "../styles/Sample.module.css";

export default function Sample() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <HomeIcon />
      <div>Hello World!</div>
      <div>23 07 2022</div>
    </div>
  );
}
