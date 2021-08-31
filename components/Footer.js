import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.footerSection}>
        <p>web3 dev club</p>
        {/* <br /> */}
        <p>Indiana University 2021</p>
        <p>Bloomington, IN</p>
        <a href="mailto:web3devclub@gmail.com">web3devclub@gmail.com</a>
      </section>
    </>
  );
}
