import React from 'react'
import Container from './container'
//import Formulario from './formulario'

import Efata from '../images/logos/logo-efata.png'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.midcolumn}>
            <img src={Efata} alt="Logo Efata" className={styles.icon} />
          </div>
          <p>
            Efata es un programa de <br />
            <a
              href="https://www.domuscolombia.org/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Fundación Domus Colombia
            </a>
          </p>
        </div>
        <div className={styles.column}>
          <p>Red Terapéutica Efata</p>

          <p>Finca San Jeronimo, Vereda Santa Rita Baja</p>
          <p>Silvania, Cundinamarca</p>

          <p>Celular</p>
          <p>323 5778680</p>
        </div>
        {/*        <div className={styles.column}>
          <Formulario />
        </div> */}
        {/*         <div className={styles.column}>
          <div className={styles.lastcolumn}>
            <a
              title="mobil"
              href={`https://api.whatsapp.com/send?phone=573219499271&text=Hola, estoy mirando la página de la fundación y quisiera...`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <img src={WhatsApp} alt="WhatsApp" className={styles.icon} />
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  </Container>
)

export default Footer
