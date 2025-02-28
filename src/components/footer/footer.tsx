import { Container, Typography } from "@mui/material";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" className={styles.copyright}>
          © {new Date().getFullYear()} React+Vitest. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
