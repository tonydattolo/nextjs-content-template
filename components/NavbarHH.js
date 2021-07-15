import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Link from "next/dist/client/link";
import styles from "../styles/NavbarHH.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faMedium, faTwitter, faTwitch, faSpotify, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function NavbarHH() {
  return (
    <Navbar bg="" expand="lg" className={styles.navbarStyling}>

      <Link href="/" passHref>
        <Navbar.Brand className={styles.logo}>(Hoosier Hackers)</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" as="ul">
          
          <Nav.Item as="li">
            <Link href="/aboutus" passHref>
              <Nav.Link href="#home" passhref className={styles.navText}>
                aboutUs
              </Nav.Link>
            </Link>
          </Nav.Item>
          
          <Nav.Item as="li">
            <Link href="/" passHref>
              <Nav.Link href="#home" passhref className={styles.navText}>
                hackathon
              </Nav.Link>
            </Link>
          </Nav.Item>
          
          <Nav.Item as="li">
            <Link href="/" passHref>
              <Nav.Link href="#home" passhref className={styles.navText}>
                hackTeams
              </Nav.Link>
            </Link>
          </Nav.Item>
          
          <Nav.Item as="li">
            <Link href="/" passHref>
              <Nav.Link href="#home" passhref className={styles.navText}>
                memberProjects
              </Nav.Link>
            </Link>
          </Nav.Item>
          
          <Nav.Item as="li">
            <Link href="/" passHref>
              <Nav.Link href="#home" passhref className={styles.navText}>
                startups
              </Nav.Link>
            </Link>
          </Nav.Item>

          {/* external social links section */}
          <Nav.Item as="li">
            <div className={styles.socialLinks}>
              <a><FontAwesomeIcon icon={faDiscord} className={styles.discord} /></a>
              <a><FontAwesomeIcon icon={faTwitter} className={styles.twitter} /></a>
              <a><FontAwesomeIcon icon={faMedium} className={styles.medium} /></a>
              <a><FontAwesomeIcon icon={faSpotify} className={styles.spotify} /></a>
              <a><FontAwesomeIcon icon={faGithub} className={styles.github} /></a>
            </div>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
