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
    Nom: "",
    Email: "",
    Adresse: "",
    'Numéro de téléphone': "",
    Text: "",
  };


  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validationSchema = yup.object({
    Nom: yup.string().required("Ce champ est requis"),
    Email: yup
      .string()
      .email("Format d'email invalide")
      .required("Ce champ est requis"),
    Adresse: yup.string().required("Ce champ est requis"),
    'Numéro de téléphone': yup
      .string()
      .matches(/^0\d{9}$/, "Ex: 0612345678")
      .required("Ce champ est requis"),

    Text: yup.string().required("Ce champ est requis"),

  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const dataToSend = {
      Nom: values.Nom,
      Email: values.Email,
      Adresse: values.Adresse,
      'Numéro de téléphone': values['Numéro de téléphone'],
      Text: values.Text,
    };

    // Vérifier les données avant d'envoyer
    console.log("Données à envoyer:", dataToSend);

    try {
      const response = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }

      console.log("Formulaire soumis avec succès !");
      setSuccessMessage("Formulaire soumis avec succès !");
      setErrorMessage("");
      onClose(); // Close the form modal
      setShowSuccessDialog(true); // Show the success dialog
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      setErrorMessage("Erreur lors de l'envoi des données");
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
          Envoyez un message
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
                      id="Nom"
                      name="Nom"
                      label="Nom & Prénom"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Nom}
                      error={!!touched.Nom && Boolean(errors.Nom)}
                      helperText={touched.Nom && errors.Nom}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="Numéro de téléphone"  // Changer de "telephone" à "Numéro de téléphone"
                      name="Numéro de téléphone" // Le même nom que dans la validation yup
                      label="Numéro de téléphone"
                      type="telephone"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values['Numéro de téléphone']}
                      error={!!touched['Numéro de téléphone'] && Boolean(errors['Numéro de téléphone'])}
                      helperText={touched['Numéro de téléphone'] && errors['Numéro de téléphone']}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="Adresse"
                      name="Adresse"
                      label="Adresse"
                      type="text"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Adresse}
                      error={!!touched.Adresse && Boolean(errors.Adresse)}
                      helperText={touched.Adresse && errors.Adresse}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      margin="dense"
                      id="Email"
                      name="Email"
                      label="Email"
                      type="email"
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Email}
                      error={!!touched.Email && Boolean(errors.Email)}
                      helperText={touched.Email && errors.Email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      margin="dense"
                      id="Text"
                      name="Text"
                      label="Text"
                      type="text"
                      multiline
                      rows={4}
                      fullWidth
                      variant="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.Text}
                      error={!!touched.Text && Boolean(errors.Text)}
                      helperText={touched.Text && errors.Text}
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
