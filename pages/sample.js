import Head from "next/head";
import Image from "next/image";
import HomeIcon from "../images/HomeIcon";
import styles from "../styles/Sample.module.css";

export default function Sample() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <HomeIcon />
    </div>
  );
}
