//  S# SEVERITY
//
//  Logo.tsx
//
//  Created by Edson Júnior Ananias de Lima on 10/10/23.
//  Copyright © 2023 Fracti Abacus, FA. All rights reserved.
//

// Logo.tsx
import Link from 'next/link';
import '../styless/styles.css';

export const Logo = () => {
  return (
    <h1 className="logo-container"> {/* Aplicando a classe CSS */}
      <Link href="/" style={{ textDecoration: 'none', color: 'var(--preto-ebano)' }}>
        Fracti Abacus
      </Link>
    </h1>
  );
};

