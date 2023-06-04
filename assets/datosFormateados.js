
export const formatData = (datos) => {
  const labels = datos.map((elemento) => elemento.year);
  const total = datos.map((elemento) => elemento.total);
  const adultos_male = datos.map((elemento) => elemento.malesAdult);
  const adultos_female = datos.map((elemento) => elemento.femalesAdult);
  const niños_male = datos.map((elemento) => elemento.malesUnderage);
  const niños_female = datos.map((elemento) => elemento.femalesUnderage);
  const mayor_male = datos.map((elemento) => elemento.malesSenior);
  const mayor_female = datos.map((elemento) => elemento.femalesSenior);

  return {
    labels: labels,
    total: total,
    adultos_male: adultos_male,
    adultos_female: adultos_female,
    niños_male: niños_male,
    niños_female: niños_female,
    mayor_male: mayor_male,
    mayor_female: mayor_female,
  };
};
