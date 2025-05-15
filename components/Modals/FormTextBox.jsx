import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const FormTextBox = ({ isOpen, onClose }) => {

  const initialValues = {
    form_id: "text-form",
    nom: "",
    email: "",
    adresse: "",
    tel: "",
    text: "",
  };


  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validationSchema = yup.object({
    nom: yup.string().required("Ce champ est requis"),
    email: yup
      .string()
      .email("Format d'email invalide")
      .required("Ce champ est requis"),
    adresse: yup.string().required("Ce champ est requis"),
    tel: yup
      .string()
      .matches(/^0\d{9}$/, "Ex: 0612345678")
      .required("Ce champ est requis"),

    text: yup.string().required("Ce champ est requis"),

  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const dataToSend = {
      form_id: 'text-form',
      nom: values.nom,
      email: values.email,
      adresse: values.adresse,
      tel: values.tel,
      text: values.text,
    };

    // Vérifier les données avant d'envoyer
    console.log("Données à envoyer:", dataToSend);

    const response = await fetch("http://localhost/api/submit-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("Logs from backend:", responseData.logs); // Log backend logs
      setSuccessMessage("Formulaire soumis avec succès !");
      setErrorMessage("");
      setShowSuccessDialog(true); // Show the success dialog
    }
    else if (!response.ok) {
      console.error("Erreur d'envoi :", responseData);
      console.log("Logs from backend:", responseData.logs); // Log backend logs
      setErrorMessage(`Erreur: ${responseData.message} (Code: ${responseData.error_code})`);
      setSuccessMessage("");
    }

    setSubmitting(false);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    onClose(); // Ensure the form modal is also closed
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle
          variant="h4"
          textAlign="center"
          color="white"
          sx={{ backgroundColor: "#eb7a37", textTransform: "uppercase" }}
        >
          Envoyez un méssage
        </DialogTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({
            isSubmitting,
            isValid,
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              {console.log(errors)}
              <DialogContent>
                <DialogContentText>
                  Veuillez tapez vos informations
                </DialogContentText>

                <Grid container spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="nom"
                      name="nom"
                      label="Nom & Prénom"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.nom}
                      error={!!touched.nom && Boolean(errors.nom)}
                      helperText={touched.nom && errors.nom}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="tel"
                      name="tel"
                      label="Numéro de téléphone"
                      type="telephone"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.tel}
                      error={!!touched.tel && Boolean(errors.tel)}
                      helperText={touched.tel && errors.tel}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="adresse"
                      name="adresse"
                      label="Adresse"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.adresse}
                      error={!!touched.adresse && Boolean(errors.adresse)}
                      helperText={touched.adresse && errors.adresse}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={!!touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      margin="dense"
                      id="text"
                      name="text"
                      label="Votre méssage"
                      type="text"
                      multiline
                      rows={4}
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.text}
                      error={!!touched.text && Boolean(errors.text)}
                      helperText={touched.text && errors.text}
                    />
                  </Grid>

                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose}>Annuler</Button>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? <CircularProgress size={24} /> : 'Envoyer'}
                </Button>
              </DialogActions>
              {successMessage && <Alert severity="success">{successMessage}</Alert>}
              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </form>
          )}
        </Formik>
      </Dialog>
      <Dialog
        open={showSuccessDialog}
        onClose={handleCloseSuccessDialog}
      >
        <DialogTitle>Succès</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Formulaire soumis avec succès !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormTextBox;
