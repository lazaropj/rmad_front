import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import * as Style from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data2 = {
  userName: 'Wesley',
  user_id: 8,
  travels: [{
        Title: 'Teste de viagem',
        vote: [1, 2, 3, 4, 5, 6],
        date: '2020-06-01',
        route: 'Boqueirão',
        start_date: '2020-06-01',
        finish_date: '2020-06-01',
        code: '12345',
        user_id: 8,
        id: 1, },
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart - Votes',
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Recorrência',
      data: [12, 19, 3, 5, 2, 3, 10, 12, 5],
      backgroundColor: '#ffd428',
    },
  ],
};

export const ChartDetails: React.FC = () => {
  return (
    <Style.Container>
      <Bar options={options} data={data} />
    </Style.Container>
  );
};
