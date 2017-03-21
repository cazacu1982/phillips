import React, { Component } from "react";
import styles from './Inscriere.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FormControl, FormGroup, ControlLabel, Radio, HelpBlock} from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class Inscriere extends Component {
    constructor (props) {
        super(props);
        this.state= {
            value: ''
        }
    }
    
    render() {
        return (
            <div>
                <div className={styles.bg} style={{backgroundImage: 'url("./assets/images/bg.png")'}}>
                    <div className={styles.container}>
                        <h1>Completează formularul pentru a intra în tragerea la sorţi a marelui premiu.</h1>
                       <form action="#" method="post">
                            <FormGroup className={styles.formGroup}>
                                <div className={styles.Group}>
                                <ControlLabel className={styles.ControlLabel}>NUME*</ControlLabel>
                                <FormControl className={styles.formControl} type="text"  placeholder="Enter text" />
                                <ControlLabel className={styles.ControlLabel}>PRENUME*</ControlLabel>
                                <FormControl className={styles.formControl} type="text"  placeholder="Enter text" />
                                <ControlLabel className={styles.ControlLabel}>NUMAR DE TELEFON MOBIL*</ControlLabel>
                                <FormControl className={styles.formControl} type="text"  placeholder="Enter text" />
                                <ControlLabel className={styles.ControlLabel}>ADRESA DE E-MAIL*</ControlLabel>
                                <FormControl className={styles.formControl} type="text"  placeholder="Enter text" />
                                </div>
                                <ControlLabel className={styles.radioLabel}>Sunt de acord cu Regulamentul Oficial al Campaniei disponibil pe <Link to="http://www.philips.ro/">www.philips.ro</Link>.<Radio className={styles.buttonRadio}><span>*</span></Radio></ControlLabel>
                                <ControlLabel className={styles.radioLabel}>Sunt de acord ca datele mele să fie utilizate în scop de marketing în activităţi ulterioare Philips.<Radio className={styles.buttonRadio} /></ControlLabel>
                                <FormControl.Feedback />
                                <HelpBlock className={styles.help}>Câmpurile marcate cu * sunt obligatorii</HelpBlock>
                               <button type="submit"> <Link to="/final">TRIMITE</Link></button>
                            </FormGroup>
                        </form>
                    </div>
                 </div>
            </div>
        );
    }
}
