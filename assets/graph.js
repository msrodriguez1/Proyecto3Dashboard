


export const graph = (datos, contenedor1, contenedor2, contenedor3, contenedor4) => {
  console.log(contenedor1);

  // Check if the chart already exists and destroy it
  const existingChart1 = contenedor1.chart;
  if (existingChart1) {
    existingChart1.destroy();
  }
  const existingChart2 = contenedor2.chart;
  if (existingChart2) {
    existingChart2.destroy();
  }
  const existingChart3 = contenedor3.chart;
  if (existingChart3) {
    existingChart3.destroy();
  }
  const existingChart4 = contenedor4.chart;
  if (existingChart4) {
    existingChart4.destroy();
  }

  const grafico1 = new Chart(contenedor1, {
    type: 'line',
    data: {
      labels: datos.labels,
      datasets: [
        {
          label: 'Migración Total',
          data: datos.total,
          borderWidth: 1,
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 30000,
        },
      },
    },
  });

  
  const grafico2 = new Chart(contenedor2, {
    type: 'line',
    data: {
      labels: datos.labels,
      datasets: [
        {
          label: 'Niños',
          data: datos.niños_male,
          borderWidth: 1,
        },
        {
          label: 'Niñas',
          data: datos.niños_female,
          borderWidth: 1,
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 30000,
        },
      },
    },
  });

  
  const grafico3 = new Chart(contenedor3, {
    type: 'line',
    data: {
      labels: datos.labels,
      datasets: [
        {
          label: 'Adultos',
          data: datos.adultos_male,
          borderWidth: 1,
        },
        {
          label: 'Adultas',
          data: datos.adultos_female,
          borderWidth: 1,
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 30000,
        },
      },
    },
  });

  
  const grafico4 = new Chart(contenedor4, {
    type: 'line',
    data: {
      labels: datos.labels,
      datasets: [
        {
          label: 'Viejos',
          data: datos.mayor_male,
          borderWidth: 1,
        },
        {
          label: 'Viejas',
          data: datos.mayor_female,
          borderWidth: 1,
        }
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 0,
          max: 30000,
          
        },
        
 

      },
    },
  });

  // Store the chart instance on the container element
  contenedor1.chart = grafico1;
  contenedor2.chart = grafico2;
  contenedor3.chart = grafico3;
  contenedor4.chart = grafico4;

};
