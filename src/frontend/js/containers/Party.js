import reduxify from 'reduxify';
import * as actions from '../actions/index';
import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import palette from '../constants/palette';
import Paper from 'material-ui/Paper';
import partyText from '../text/partyText';
const statement = partyText.statement;
import Checkmark from 'material-ui/svg-icons/action/done';
import Cross from 'material-ui/svg-icons/content/clear';
const qMark = '../../img/qMark.svg';

const styles = StyleSheet.create({
  fCont: {
    display:'flex',
    flex: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    width: '740px',
    padding: '10px',
  },
  logo: {
    width: "125px",
    height: "125px",
  },
  logoBackbadge: {
    float: 'left',
    width: "145px",
    height: "145px",
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: palette.white,
    margin: "10px"
  },
  goodBackbadge: {
    float: 'right',
    width: "145px",
    height: "145px",
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: palette.goodGreen,
    margin: "10px"
  },
  badBackbadge: {
    float: 'right',
    width: "145px",
    height: "145px",
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: palette.red,
    margin: "10px"
  },
  mehBackbadge: {
    float: 'right',
    width: "145px",
    height: "145px",
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: palette.meh,
    margin: "10px"
  },
  name: {
    fontFamily: "Roboto Condensed",
    overflow: 'hidden',
    width: '450px',
    fontSize: '2em',
    textAlign: 'center',
    color: palette.white,
    '@media (max-device-width: 800px)': {
      fontSize: '2em',
    }
  },
});

class Party extends Component {
  constructor(props){
    super(props);
    // props:
    // doesSupport, logo, partyName { EN, IS }
  }

  render () {
    const yea = (<div className={css(styles.goodBackbadge)}><Checkmark className={css(styles.logo)} color={'white'} /></div>);
    const nay = (<div className={css(styles.badBackbadge)}><Cross className={css(styles.logo)} color={'white'} /></div>);
    const meh = (<div className={css(styles.mehBackbadge)}><img src={qMark} className={css(styles.logo)} /></div>);
    return (
      <div className={css(styles.fCont)}>
        <div className={css(styles.logoBackbadge)}>
          <img src={this.props.data.logo} className={css(styles.logo)} />
        </div>
        <div className={css(styles.name)}>
          {this.props.language === 'EN' ? this.props.data.EN : null}
          {this.props.language === 'IS' ? this.props.data.IS : null}
        </div>
        {this.props.data.support === "YEA" ? yea : null}
        {this.props.data.support === "NAY" ? nay : null}
        {this.props.data.support === "MEH" ? meh : null}
      </div>
    );
  }
}

export default reduxify(actions, ['language'], Party);
