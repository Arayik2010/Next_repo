import { AnySrvRecord } from 'dns';
import { type } from 'os';
import styles from './layout.module.css';

type Children = { 
  children:any
}

export default function Layout({children}:Children) {
  return <div className={styles.container}>{children}</div>;
}