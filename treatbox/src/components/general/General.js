import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './General.css';
function General() {
  const username = localStorage.getItem("username");
  const [totalPelis, setTotalPelis] = useState(0);
  const [totalSeries, setTotalSeries] = useState(0);
  const [avgPelis, setavgPelis] = useState(0);
  const [avgSeries, setavgSeries] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getNumsaved();
  }, []);
  useEffect(() => {
    setTotal(totalPelis + totalSeries);
  }, [totalPelis, totalSeries]);

  const getNumsaved = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/total/${username}/`);
      setTotalPelis(res.data.total_pelis);
      setTotalSeries(res.data.total_series);
      setavgPelis(res.data.avg_pelis);
      setavgPelis(res.data.setavgSeries);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='total-general'>
      <div className='nivel-general'>
        Tu nivel es {total}
      </div>
      <div className='estadisticas'>
        <div className='estadisticas-txt'>
          Estadísticas
        </div>
        <div className='estadisticas-resto'>

          <div className='estadisticas-peli'>
            {totalPelis}
            <div>
              Total Películas
            </div>
          </div>

          <div className='estadisticas-serie'>
            {totalSeries}
            <div>
              Total Series
            </div>
          </div>
          <div className='estadisticas-peli'>
            {totalPelis}
            <div>
              Puntuacion media peliculas
            </div>
          </div>

          <div className='estadisticas-serie'>
            {totalSeries} 
            <div>
              Puntuacion media series
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default General;