//  S# SEVERITY
//
//  BoardDecimalPlace.tsx
//
//  Created by Edson Júnior Ananias de Lima on 13/10/23.
//  Copyright © 2023 Fracti Abacus, FA. All rights reserved.
//

'use client'

import { Descriptions } from '@/domain/CustomTypesModel'
import { DecimalPlaceModel } from '@/domain/DecimalPlaceModel'

import { AmountUseCase } from '@/application/AmountUseCase'
import { ChoosingColorUseCase } from '@/application/ChoosingColorUseCase'

const choosingColor = new ChoosingColorUseCase()

import React from 'react';
import '../../styless/styles.css'; // Importe o arquivo CSS

export const BoardDecimalPlace = ({ type }: DecimalPlaceModel) => {
  const amount = AmountUseCase(type);

  return (
    <div
      id={type.toString()}
      className="board-decimal-place" // Aplicando a classe CSS
      style={{
        backgroundColor: choosingColor.colorDecimalPlace(type),
      }}
    >
      <h1>{amount}</h1>
      <span>{Descriptions[type]}</span>
    </div>
  );
};

