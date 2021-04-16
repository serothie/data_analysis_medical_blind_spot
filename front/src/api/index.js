import axios from "axios";

const getDoctors = () => axios.get("/doctor");
const getHospitals = () => axios.get("/hospital");
const getAmbulMedics = () => axios.get("/ambul-medic");
const getDiagnosis = () => axios.get("/diagnosis");

const getSubAmbul = () => axios.get();

export const getTargets = () =>
  axios
    .all([getDoctors(), getDiagnosis(), getHospitals(), getAmbulMedics()])
    .then(
      axios.spread((res1, res2, res3, res4) => [
        [...res1.data],
        [...res2.data],
        [...res3.data],
        [...res4.data],
      ])
<<<<<<< HEAD
    );
=======
    );

export const getSubPageAllData = () => {};
>>>>>>> feature_front_main_specific_page
