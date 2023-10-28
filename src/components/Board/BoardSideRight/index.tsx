//  S# SEVERITY
//
//  Board/BoardSideRight/index.tsx
//
//  Created by Edson Júnior Ananias de Lima on 12/10/23.
//  Copyright © 2023 Fracti Abacus, FA. All rights reserved.
//

'use client'
import React from 'react';
import '../../../styless/styles.css'; // Importe o arquivo CSS
import { Bead } from '@/components/Bead';
import { PlaceValueType, PositionType } from '@/domain/CustomTypesModel';
import { useAbacusStore } from '@/stores/useBeadStore';
import { BoardSideRightRender } from './BoardSideRightRender';




export const BoardSideRight = () => {
  const {
    beads: { unit, ten, hundred },
  } = useAbacusStore();

  return (
    <div id="add" className="board-side-right"> {/* Aplicando a classe CSS */}
      <BoardSideRightRender
        type={PlaceValueType.unit}
        position={PositionType.top}
      >
        {unit.map((bead) => (
          <Bead key={bead.id} id={bead.id} type={bead.type} />
        ))}
      </BoardSideRightRender>
      <BoardSideRightRender
        type={PlaceValueType.ten}
        position={PositionType.middle}
      >
        {ten.map((bead) => (
          <Bead key={bead.id} id={bead.id} type={bead.type} />
        ))}
      </BoardSideRightRender>
      <BoardSideRightRender
        type={PlaceValueType.hundred}
        position={PositionType.bottom}
      >
        {hundred.map((bead) => (
          <Bead key={bead.id} id={bead.id} type={bead.type} />
        ))}
      </BoardSideRightRender>
    </div>
  );
};
