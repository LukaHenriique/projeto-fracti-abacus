//  S# SEVERITY
//
//  Main.tsx
//
//  Created by Edson Júnior Ananias de Lima on 01/10/23.
//  Copyright © 2023 Fracti Abacus, FA. All rights reserved.
//

// Main.tsx
import { ReactNode } from 'react';
import '../styles/styles.css';

interface MainProps {
  children?: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="main-container"> {/* Aplicando a classe CSS */}
      {children}
    </main>
  );
}
