import React, { useState } from 'react';
import './Ranking.css';
import fondoRankUser from '../Icons/fondoRankUser.jpg'



function RankingListItem() {
    return (
        <div>
            <div className='container'>
                <div className='rankUserInfo'>
                    <p className='usuario'>Usuario</p>
                    <p className='nivel'>Nivel</p>
                    <p className='rank'>Rank 1</p>
                    <p className='puntos'>puntos</p>
                    <div className='avatarRank'>
                    <div className='avatar'></div>
                    </div>
                    <img src={fondoRankUser}></img>
                </div>
            </div>
        </div>
    );
}

export default RankingListItem;