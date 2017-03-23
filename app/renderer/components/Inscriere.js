import React, { Component } from "react";
import styles from './Inscriere.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FormControl, FormGroup, ControlLabel, Radio, HelpBlock} from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
export default class Inscriere extends Component {
    constructor (props) {
        super(props);
        this.state= {
            nume:'',
            prenume: '',
            tel: '',
            email: '',
            radio1: true,
            radio2: true
        };
        this.getValidationState = this.getValidationState.bind(this)
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 2) return 'success';
        else if (length > 0) return 'error';
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/profile', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nume: this.state.nume,
                prenume: this.state.prenume,
                tel: this.state.tel,
                email: this.state.email,
                radio1: this.state.radio1,
                radio2: this.state.radio2
            })
        });

    }

    render() {
        return (
            <div>
                <div className={styles.bg} style={{backgroundImage: 'url("./assets/images/bg.png")'}}>
                    <div className={styles.container}>
                        <h1>Completează formularul pentru a intra în tragerea la sorţi a marelui premiu.</h1>
                       <form action="#" method="post" id="form" onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup className={styles.formGroup}>
                                <div className={styles.Group}>
                                    <FormGroup controlId="formValidationText" >
                                        <ControlLabel className={styles.ControlLabel}>NUME*</ControlLabel>
                                        <FormControl className={styles.formControl}
                                                     type="text"
                                                     name='nume'
                                                     required={true}
                                                     placeholder="Enter name"
                                                     onChange={this.handleChange.bind(this)}
                                        />
                                        <HelpBlock>Câmpul Nume nu este completat corespunzător. Te rugăm verifică ca datele introduse în formularul de înscriere să fie corect completate. Îţi mulţumim!</HelpBlock>
                                    </FormGroup>
                                <ControlLabel className={styles.ControlLabel}>PRENUME*</ControlLabel>
                                <FormControl className={styles.formControl}
                                             type="text"
                                             name='prenume'
                                             placeholder="Enter prenume"
                                             onChange={this.handleChange.bind(this)}
                                        />
                                <ControlLabel className={styles.ControlLabel}>NUMAR DE TELEFON MOBIL*</ControlLabel>
                                <FormControl className={styles.formControl}
                                             type="text"
                                             name='tel'
                                             placeholder="Enter nr telefon"
                                             onChange={this.handleChange.bind(this)}
                                        />
                                <ControlLabel className={styles.ControlLabel}>ADRESA DE E-MAIL*</ControlLabel>
                                <FormControl className={styles.formControl}
                                             type="text"
                                             name='email'
                                             placeholder="Enter email"
                                             onChange={this.handleChange.bind(this)}
                                        />
                                </div>
                                <ControlLabel className={styles.radioLabel}>Sunt de acord cu Regulamentul Oficial al Campaniei disponibil pe <Link to="http://www.philips.ro/">www.philips.ro</Link>.<Radio className={styles.buttonRadio} type="checkbox" name="radio1"  onChange={this.handleChange.bind(this)}><span>*</span></Radio></ControlLabel>
                                <ControlLabel className={styles.radioLabel}>Sunt de acord ca datele mele să fie utilizate în scop de marketing în activităţi ulterioare Philips.<Radio className={styles.buttonRadio} type="checkbox" name="radio2"  onChange={this.handleChange.bind(this)}/></ControlLabel>
                                <FormControl.Feedback />
                                <HelpBlock className={styles.help}>Câmpurile marcate cu * sunt obligatorii</HelpBlock>
                               <button type="submit">TRIMITE</button>
                            </FormGroup>
                        </form>
                    </div>
                 </div>
            </div>
        );
    }
}
