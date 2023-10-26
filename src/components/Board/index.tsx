//  S# SEVERITY
//
//  Board/index.tsx
//
//  Created by Edson Júnior Ananias de Lima on 12/10/23.
//  Copyright © 2023 Fracti Abacus, FA. All rights reserved.
//

'use client'

import { ReactNode } from 'react'
import '../../styless/styles.css';

interface BoardProps {
  children?: ReactNode
}

export const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <div className="board-container"> {/* Aplique a classe CSS aqui */}
      {children}
    </div>
  )
}

