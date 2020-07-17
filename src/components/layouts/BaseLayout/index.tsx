import React, { ReactNode } from "react";
import styles from "./styles/styles.module.scss";

type IProps = {
  children?: ReactNode;
};

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default BaseLayout;