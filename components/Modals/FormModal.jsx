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
    nom: "",
    email: "",
    adresse: "",
    tel: "",
    category: "",
    module: "",
    type: "Présentiel",
  };


  const [categoryValue, setCategoryValue] = useState('');
  const [moduleOptions, setModuleOptions] = useState([]);

  const options = {
    category: ['Langues', 'Collége', 'Tronc commun', 'Bac', 'Universitaire', 'Concours'],
    module: {
      Langues: ["Français", "Anglais", "Espagnol"],
      Collége: ['1ere année', '2éme année', '3éme année'],
      'Tronc commun': ['Sciences', 'Lettres et sciences humaines'],
      Bac: ['Economique 1ere année', 'Economique 2éme année', 'Scientifique 1ere année', 'Scientifique 2éme année'],
      Universitaire: ['Economique Semestre 1', 'Economique Semestre 2', 'Economique Semestre 3', 'Economique Semestre 4', 'Economique Semestre 5', 'Economique Semestre 6'],
      Concours: ['CCA / GFCF / Ingénieurs Comptable / Financière et Fiscale / Sciences de Gestion', 'Management des ressources humaines / GRF'],
    },
  };

  // const handleCategoryChange = (event) => {
  //   console.log(event)
  //   const value = event.target.value;
  //   setCategoryValue(value);
  //   setModuleOptions(options.module[value] || []);
  // };

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
    category: yup
      .string()
      .oneOf(["Langues", "Collége", "Tronc commun", "Bac", "Universitaire", "Concours"], "Option invalide")
      .required("Ce champ est requis"),
    module: yup
      .string()
      .oneOf(["Français", "Anglais", "Espagnol", "1ere année", "2éme année", "3éme année", 'Sciences', 'Lettres et sciences humaines', 'Economique 1ere année', 'Economique 2éme année', 'Scientifique 1ere année', 'Scientifique 2éme année', 'Economique Semestre 1', 'Economique Semestre 2', 'Economique Semestre 3', 'Economique Semestre 4', 'Economique Semestre 5', 'Economique Semestre 6', 'CCA / GFCF / Ingénieurs Comptable / Financière et Fiscale / Sciences de Gestion', 'Management des ressources humaines / GRF'], "Option invalide")
      .required("Ce champ est requis"),

    type: yup.string().required("Ce champ est requis"),

  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const dataToSend = {
      nom: values.nom,
      email: values.email,
      adresse: values.adresse,
      tel: values.tel,
      category: values.category,
      module: values.module,
      type: values.type
    };

    // Vérifier les données avant d'envoyer
    console.log("Données à envoyer:", dataToSend);
    console.log("Données à envoyer:", JSON.stringify(dataToSend));

    const response = await fetch("http://localhost/api/submit-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Erreur d'envoi :", responseData);
      console.log("Logs from backend:", responseData.logs); // Log backend logs
      setErrorMessage(`Erreur: ${responseData.message} (Code: ${responseData.error_code})`);
      setSuccessMessage("");
    }
    else if (response.ok) {
      console.log("Formulaire soumis avec succès !");
      console.log("Logs from backend:", responseData.logs); // Log backend logs
      setSuccessMessage("Formulaire soumis avec succès !");
      setErrorMessage("");
      setShowSuccessDialog(true); // Show the success dialog
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
                      id="tel"  // Changer de "telephone" à "Numéro de téléphone"
                      name="tel" // Le même nom que dans la validation yup
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

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="dense" variant="standard">
                      <InputLabel id="first-select-label">First Select</InputLabel>
                      <Select
                        labelId="first-select-label"
                        id="category"
                        name="category"
                        value={categoryValue}
                        onChange={(event) => {
                          handleChange(event);
                          //handleCategoryChange(event);
                          console.log(event)
                          const value = event.target.value;
                          setCategoryValue(value);
                          setModuleOptions(options.module[value] || []);
                          setFieldValue('module', '')
                        }}
                        onBlur={handleBlur}
                        label="First Select"
                        error={!!touched.category && Boolean(errors.category)}
                      >

                        {options.category.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {!!touched.category && Boolean(errors.category) && (
                        <FormHelperText error>{touched.category && errors.category}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth margin="dense" variant="standard">
                      <InputLabel id="second-select-label">Second Select</InputLabel>
                      <Select
                        labelId="second-select-label"
                        id="module"
                        name="module"
                        value={values.module}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Second Select"
                        error={!!touched.module && Boolean(errors.module)}
                      >
                        {moduleOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {!!touched.module && Boolean(errors.module) && (
                        <FormHelperText error>{touched.module && errors.module}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Déroulement des cours :
                    </Typography>
                    <RadioGroup
                      name="type"
                      value={values.type}
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
