import React, {Component} from 'react';
import styles from './Step1.css';
import ButtonInscriere from './ButtonInscriere';

export  default class Step1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showStep2: true,
            bulbs2: [
                {
                    id: 1, bulbsPortocaliu: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 7, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/corect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare portocalie.',
                    urltipbec: './assets/images/bec_portocaliu.png'
                },

                {
                    id: 2, bulbsRoz: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/corect.png'},
                    {id: 3, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 7, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/incorect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare roz.',
                    urltipbec: './assets/images/bec_roz.png'
                },
                {
                    id: 3, bulbsMov: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/corect.png'},
                    {id: 7, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/corect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare mov.',
                    urltipbec: './assets/images/bec_mov.png'
                },
                {
                    id: 4, bulbsVerde: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/corect.png'},
                    {id: 7, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/incorect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare verde.',
                    urltipbec: './assets/images/bec_verde.png'
                },
                {
                    id: 5, bulbsAlbastru: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/corect.png'},
                    {id: 6, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 7, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare albastră.',
                    urltipbec: './assets/images/bec_albastru.png'
                },
                {
                    id: 6, bulbsGalben: [
                    {id: 1, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/corect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 7, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/incorect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roşie şi becul care a fost de culoare galbenă.',
                    urltipbec: './assets/images/bec_galben.png'
                },
                {
                    id: 7, bulbsRoz: [
                    {id: 1, url: './assets/images/bec_roz.png', urlraspuns: './assets/images/corect.png'},
                    {id: 2, url: './assets/images/bec_galben.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 3, url: './assets/images/bec_verde.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 4, url: './assets/images/bec_portocaliu.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 5, url: './assets/images/bec_albastru.png', urlraspuns: './assets/images/incorect.png'},
                    {id: 6, url: './assets/images/bec_mov.png', urlraspuns: './assets/images/corect.png'},
                    {id: 7, url: './assets/images/bec_rosu.png', urlraspuns: './assets/images/incorect.png'}
                ],
                    txt: 'Aprinde becul care a fost de culoare roz şi becul care a fost de culoare mov.',
                    urltipbec: './assets/images/bec_mov.png'
                }
            ],
            bulbsWhite: [
                {id: 1, url: './assets/images/bec_white.png'},
                {id: 2, url: './assets/images/bec_white.png'},
                {id: 3, url: './assets/images/bec_white.png'},
                {id: 4, url: './assets/images/bec_white.png'},
                {id: 5, url: './assets/images/bec_white.png'},
                {id: 6, url: './assets/images/bec_white.png'},
                {id: 7, url: './assets/images/bec_white.png'}
            ]
        };
    }

    showAnswer(i, n) {

        if(n.toString() === './assets/images/incorect.png' ) {
            var elemPS = document.getElementById( 'text1' );
            elemPS.classList.remove('visible_16YK-'); // Add class
            elemPS.classList.add('hidden_1VS8F'); //
            var elemPS = document.getElementById( 'rezultatInCorect' );
            elemPS.classList.add('visible_16YK-'); // Add class
            elemPS.classList.remove('hidden_1VS8F'); //
            var elemPS = document.getElementById( 'rezultatCorect' );
            elemPS.classList.remove('visible_16YK-'); // Add class
            elemPS.classList.add('hidden_1VS8F'); //
        } else if(n.toString() === './assets/images/corect.png' ) {
            var elemPS = document.getElementById( 'text1' );
            elemPS.classList.remove('visible_16YK-'); // Add class
            elemPS.classList.add('hidden_1VS8F'); //
            var elemPS = document.getElementById( 'rezultatCorect' );
            elemPS.classList.add('visible_16YK-'); // Add class
            elemPS.classList.remove('hidden_1VS8F'); //
            var elemPS = document.getElementById( 'rezultatInCorect' );
            elemPS.classList.remove('visible_16YK-'); // Add class
            elemPS.classList.add('hidden_1VS8F'); //
        }
        var elemBC = document.getElementsByClassName( 'becuri_3tzgy' );
        var elemBW = document.getElementsByClassName( 'becuriW_3bkhb' );
        var elemR = document.getElementsByClassName( 'raspuns_1q91r' );
        var elemRaspuns = elemR[i - 1];
        var elem =  elemBC[i - 1];
        var elemW =  elemBW[i - 1];
        elemRaspuns.classList.remove('hidden_1VS8F');
        elemRaspuns.classList.add('visible_16YK-');
        elem.classList.remove('hidden_1VS8F'); //
        elem.classList.add('visible_16YK-'); // Add class
        elemW.classList.remove('visible_16YK-'); //
        elemW.classList.add('hidden_1VS8F'); // Add class
    }

    stepDoi() {
        setTimeout(() => {
            var elemBT = document.getElementById( 'bulbsTip' );
            elemBT.classList.remove('tipBulbs_2UhwT'); // Add class
            elemBT.classList.add('hide'); //
        },10000);
    }
    componentWillMount() { }

    render() {
        const newBulbs = this.state.bulbs2.splice(Math.floor(Math.random() * this.state.bulbs2.length), 1);

       // console.log(newBulbs);
        var toggleClass = {
            showBulbsWhite: true,
            hideBulbsColored: false
        };

        let classDiv = toggleClass.showBulbsWhite ? styles.hidden : styles.visible;
        let classDivColored = toggleClass.hideBulbsColored ? styles.hidden : styles.visible;

        for (let i of newBulbs) {
            var newArr = Object.keys(i).map(key => i[key]);
            //console.log(newArr[1]);
        }

        let raspuns = newArr[1].map((item) => {
            return (
                <div className={classDiv + ' ' + styles.raspuns} key={item.id} style={{backgroundImage: 'url(' + item.urlraspuns +')'}}></div>
            )
        });

        let bulbsList = newArr[1].map((item) => {
            return (
                <div onClick={this.showAnswer.bind(this, item.id, item.urlraspuns)} className={classDivColored + ' ' + styles.bulb + ' ' + styles.becuri }  key={item.id} style={{backgroundImage: 'url(' + item.url +')'}}></div>
            )
        });

        let bulbsListWhite = this.state.bulbsWhite.map((item) => {
            // console.log(item);
            return (
                <div className={classDiv + ' ' + styles.bulb + ' ' + styles.becuriW} key={item.id} style={{backgroundImage: 'url(' + item.url +')'}}></div>
            )
        });

        let bulbsListTip = newBulbs.map((item) => {
            return (
                <div className={styles.tipBec} key={item.id} style={{backgroundImage: 'url(' + item.urltipbec +')'}}></div>
            )
        });
        let text = newBulbs.map((item) => {
            return (
                <p className={classDiv+ ' ' + styles.text} key={item.id} id="text1">{item.txt}</p>
            )
        });

        return (
           <div>
                <div className={styles.bg} style={{backgroundImage: 'url("./assets/images/bg.png")'}} >
                <div className={styles.wrapper}>
                    <div className={styles.raspunsuri} >
                        {raspuns}
                    </div>
                    <div className={styles.bulbs} >
                        {bulbsList}
                    </div>
                    <div className={styles.bulbsWhite} >
                        {bulbsListWhite}
                    </div>
                    <p className={classDivColored} id="text">Fii atent la culorile becurilor. Această imagine va dispărea în curând de pe ecran.</p>
                    {text}
                    <p className={classDiv} id="textIncorect">Memoria ți-a jucat o festă. Dacă-ți juca un dans din Maramureș și nu-i ieșeau pașii tot nu era de preferat. Continuă, mai ai o șansă.</p>
                    <p className={classDiv} id="textCorect">Așa este, se vede că nu-ți scapă esențialul. Pregătește-te pentru runda următoare, fii cu ochii în şapte! Sau în patru cu trei. Ai prins ideea, concentrează-te pe cele şapte becuri!</p>
                    <p  className={classDiv} id="rezultatCorect">Excelent! Atenția și memoria îți funcționează perfect, vă cunoașteți din copilărie, nu-i așa? Completează  formularul și înscrie-te pentru marele premiu!</p>
                    <p  className={classDiv} id="rezultatInCorect">Răspunsul este incorect. Sigur nu ai închis ochii? Sau obișnuiești să clipești prelung? Oricum ar fi, înscrie-te pentru marele premiu!</p>
                    <div className={classDiv + ' ' + styles.tipBulbs} id="bulbsTip">
                        {bulbsListTip}
                    </div>
                    <ButtonInscriere />
                </div>
             </div>
           </div>
        )
    }

    componentDidMount() {

        setTimeout( () => {
            var elemPF = document.getElementById( 'text' );
            var elemPS = document.getElementById( 'text1' );
            var elemBC = document.getElementsByClassName( 'becuri_3tzgy' );
            var elemBT = document.getElementById( 'bulbsTip' );
            var elemBW = document.getElementsByClassName( 'becuriW_3bkhb' );
            elemPF.classList.add('hidden_1VS8F'); // Add class
            elemPF.classList.remove('visible_16YK-'); //

            for(var i = 0; i < elemBC.length; i++) {
                var elem =  elemBC[i];
                elem.classList.remove('visible_16YK-'); //
                elem.classList.add('hidden_1VS8F'); // Add class
            }
            for(var j = 0; j < elemBC.length; j++) {
                var elemW =  elemBW[j];
                elemW.classList.remove('hidden_1VS8F'); //
                elemW.classList.add('visible_16YK-'); // Add class
            }

            elemBT.classList.add('visible_16YK-'); // Add class
            elemBT.classList.remove('hidden_1VS8F'); //
            elemPS.classList.add('visible_16YK-'); // Add class
            elemPS.classList.remove('hidden_1VS8F'); //
        },5000);
        this.stepDoi();
    }
}