import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  CircularProgress,
  FormHelperText
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const FormModal = ({ isOpen, onClose }) => {

  const initialValues = {
    Nom: "",
    Email: "",
    Adresse: "",
    'Numéro de téléphone': "",
    firstSelect: "",
    secondSelect: "",
    courseType: "Présentiel",
  };


  const [firstSelectValue, setFirstSelectValue] = useState('');
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);

  const options = {
    firstSelect: ['Langues', 'Collége', 'Tronc commun', 'Bac', 'Universitaire', 'Concours'],
    secondSelect: {
      Langues: ["Français", "Anglais", "Espagnol"],
      Collége: ['1ere année', '2éme année', '3éme année'],
      'Tronc commun': ['Sciences', 'Lettres et sciences humaines'],
      Bac: ['Economique 1ere année', 'Economique 2éme année', 'Scientifique 1ere année', 'Scientifique 2éme année'],
      Universitaire: ['Economique Semestre 1', 'Economique Semestre 2', 'Economique Semestre 3', 'Economique Semestre 4', 'Economique Semestre 5', 'Economique Semestre 6'],
      Concours: ['CCA / GFCF / Ingénieurs Comptable / Financière et Fiscale / Sciences de Gestion', 'Management des ressources humaines / GRF'],
    },
  };

  // const handleFirstSelectChange = (event) => {
  //   console.log(event)
  //   const value = event.target.value;
  //   setFirstSelectValue(value);
  //   setSecondSelectOptions(options.secondSelect[value] || []);
  // };

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
    courseType: yup.string().required("Ce champ est requis"),

    firstSelect: yup
      .string()
      .oneOf(["Langues", "Collége", "Tronc commun", "Bac", "Universitaire", "Concours"], "Option invalide")
      .required("Ce champ est requis"),

    secondSelect: yup
      .string()
      .oneOf(["Français", "Anglais", "Espagnol", "1ere année", "2éme année", "3éme année", 'Sciences', 'Lettres et sciences humaines', 'Economique 1ere année', 'Economique 2éme année', 'Scientifique 1ere année', 'Scientifique 2éme année', 'Economique Semestre 1', 'Economique Semestre 2', 'Economique Semestre 3', 'Economique Semestre 4', 'Economique Semestre 5', 'Economique Semestre 6', 'CCA / GFCF / Ingénieurs Comptable / Financière et Fiscale / Sciences de Gestion', 'Management des ressources humaines / GRF'], "Option invalide")
      .required("Ce champ est requis"),

  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const dataToSend = {
      Nom: values.Nom,
      Email: values.Email,
      Adresse: values.Adresse,
      'Numéro de téléphone': values['Numéro de téléphone'],
      secondSelect: values.secondSelect,
      courseType: values.courseType,
    };

    // Vérifier les données avant d'envoyer
    console.log("Données à envoyer:", dataToSend);

    try {
      const response = await fetch("https://centre-polyvalence.com/api/submit-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        console.log(response)
        throw new Error("Erreur lors de l'envoi des données");
      }
      console.log(response)
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
          Fiche d'inscription
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
            setFieldValue
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

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="dense" variant="standard">
                      <InputLabel id="first-select-label">First Select</InputLabel>
                      <Select
                        labelId="first-select-label"
                        id="firstSelect"
                        name="firstSelect"
                        value={firstSelectValue}
                        onChange={(event) => {
                          handleChange(event);
                          //handleFirstSelectChange(event);
                          console.log(event)
                          const value = event.target.value;
                          setFirstSelectValue(value);
                          setSecondSelectOptions(options.secondSelect[value] || []);
                          setFieldValue('secondSelect', '')
                        }}
                        onBlur={handleBlur}
                        label="First Select"
                        error={!!touched.firstSelect && Boolean(errors.firstSelect)}
                      >

                        {options.firstSelect.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {!!touched.firstSelect && Boolean(errors.firstSelect) && (
                        <FormHelperText error>{touched.firstSelect && errors.firstSelect}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="dense" variant="standard">
                      <InputLabel id="second-select-label">Second Select</InputLabel>
                      <Select
                        labelId="second-select-label"
                        id="secondSelect"
                        name="secondSelect"
                        value={values.secondSelect}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Second Select"
                        error={!!touched.secondSelect && Boolean(errors.secondSelect)}
                      >
                        {secondSelectOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {!!touched.secondSelect && Boolean(errors.secondSelect) && (
                        <FormHelperText error>{touched.secondSelect && errors.secondSelect}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Déroulement des cours :
                    </Typography>
                    <RadioGroup
                      name="courseType"
                      value={values.courseType}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Présentiel"
                        control={<Radio />}
                        label="Présentiel"
                      />
                      <FormControlLabel
                        value="Distanciel"
                        control={<Radio />}
                        label="Distanciel"
                      />
                    </RadioGroup>
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

export default FormModal;
