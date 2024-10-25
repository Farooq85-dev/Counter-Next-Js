import styles from "../styles/btn.module.css";

type BtnProps = {
  title: string;
  onclick: () => void;
};

export default function BtnComp({ title, onclick }: BtnProps) {
  return (
    <button className={styles.btn} onClick={onclick}>
      {title}
    </button>
  );
}
