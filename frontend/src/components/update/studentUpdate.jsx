import { Link } from "react-router-dom";
import styles from "../../css/studentRegister.module.css";
import { ButtonRegister } from "../renterRegister/buttonRegister";
import { FormGroup } from "../renterRegister/formGroup";
import { LinksPage } from "../renterRegister/linksPage";
import { TitleRegister } from "../renterRegister/titleRenterRegister";
import { changeTitle } from "../../utilities/changeTitle";

import { Stack } from "@mui/material";
import { Container } from "@mui/system";

import { formAllDataUser } from "../../adapters/formAdapters";
import { fieldsFilled } from "../../utilities/fillFieldsUpdate";
import useAuth from "../../auth/useAuth"
import { useEffect } from "react";
import { userUpdateHandlerOnSubmit } from "../../controllers/userActionsController";

export function StudentUpdate() {
  changeTitle("Update data");
  const auth = useAuth();

  useEffect(() => {
    fieldsFilled(auth)
    console.log(auth.user);
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
                <ButtonRegister loginButton="Actualizar" />
              </div>

              <div className={styles.loginRegister}>
                <Link to="/MainScreen">Home</Link>
              </div>

            </form>
  </Container>
</Stack>
</Container>
</>
  );
}

/*

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
                <ButtonRegister />
              </div>

              <div className={styles.loginRegister}>
                <Link to="/MainScreen">Home</Link>
              </div>

            </form>
  </Container>
</Stack>
</Container>
</>

*/