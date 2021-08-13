import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.footerSection}>
        <p>Hoosier Hackers</p>
        {/* <br /> */}
        <p>Indiana University 2021</p>
        <p>Bloomington, IN</p>
        <a href="mailto:hhackers@iu.edu">hhackers@iu.edu</a>
      </section>
    </>
  );
}
