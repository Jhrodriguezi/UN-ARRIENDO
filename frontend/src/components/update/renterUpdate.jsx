import { Link } from "react-router-dom";
import styles from "../../css/renterRegister.module.css";
import { ButtonRegister } from "../renterRegister/buttonRegister";
import { Description } from "../renterRegister/description";
import { FormGroup } from "../renterRegister/formGroup";
import { LinksPage } from "../renterRegister/linksPage";
import { TitleRegister } from "../renterRegister/titleRenterRegister";
import { changeTitle } from "../../utilities/changeTitle";

import { Stack } from "@mui/material";
import { Container } from "@mui/system";

import { formAllDataUser } from "../../adapters/formAdapters";
import { fieldsFilled } from "../../utilities/fillFieldsUpdate";
import useAuth from "../../auth/useAuth";
import { useEffect } from "react";
import { userUpdateHandlerOnSubmit } from "../../controllers/userActionsController";

export function RenterUpdate() {
  const auth = useAuth();

  changeTitle("Update data")

  useEffect(() => {
    fieldsFilled(auth)
  });

  const sumbitHandler = (e) => {
    userUpdateHandlerOnSubmit(e, auth);
  };

  return (
    <>

      <LinksPage />
      <Container style={{
        maxWidth: "500px"
      }}>
        <Stack spacing={2}>
          <TitleRegister title="Renter Register" />
          <Container style={{
            maxWidth: "400px",
            margin: "5% auto",
            background: "rgba(0, 0, 0, 0.8)",
            borderRadius: "10px",
            padding: "40px 40px"
          }} display="flex">
            <form className="form-horizontal" onSubmit={sumbitHandler}>

              <div className={styles.formGroup}>
                <FormGroup name={formAllDataUser.name} placeholder="Enter your Name" title="Your Name" image="fa fa-user fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name={formAllDataUser.lastName} placeholder="Enter your Last Name" title="Your Last Name" image="fa fa-user fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name={formAllDataUser.email} placeholder="Enter your Email" title="Your Email" image="fa fa-envelope fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name={formAllDataUser.phone} placeholder="Enter your number of contact" title="Your Number Of Contact" image="fa fa-phone fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <Description />
              </div>

              {/*<div className={styles.formGroup}>
                <FormGroup name={formAllDataUser.password} placeholder="Enter your password" title="Password" image="fa fa-lock fa" type="password" />
        </div>*/}

              <div className={styles.formGroup}>
                <ButtonRegister loginButton="Actualizar" />
              </div>

              <div className={styles.loginRegister}>
                <Link to="/MainScreen">Home </Link>
              </div>

            </form>
          </Container>
        </Stack>
      </Container>
    </>
  );
}

/*<>

      <LinksPage />
      <Container style={{
        maxWidth: "500px"
      }}>
        <Stack spacing={2}>
          <TitleRegister title="Renter Register" />
          <Container style={{
            maxWidth: "400px",
            margin: "5% auto",
            background: "rgba(0, 0, 0, 0.8)",
            borderRadius: "10px",
            padding: "40px 40px"
          }} display="flex">
            <form className="form-horizontal" method="post" action="#">

              <div className={styles.formGroup}>
                <FormGroup name="name" placeholder="Enter your Name" title="Your Name" image="fa fa-user fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name="email" placeholder="Enter your Email" title="Your Email" image="fa fa-envelope fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name="number" placeholder="Enter your number of contact" title="Your Number Of Contact" image="fa fa-phone fa" type="text" />
              </div>

              <div className={styles.formGroup}>
                <Description />
              </div>

              <div className={styles.formGroup}>
                <FormGroup name="confirm" placeholder="Enter your password" title="Password" image="fa fa-lock fa" type="password" />
              </div>

              <div className={styles.formGroup}>
                <ButtonRegister loginButton="Actualizar" />
              </div>

              <div className={styles.loginRegister}>
                <Link to="/MainScreen">Home </Link>
              </div>

            </form>
          </Container>
        </Stack>
      </Container>
    </> */