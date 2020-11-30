import AppStyles from '../../App.styles';

export default class InfoStyles extends AppStyles {
  
  barBorder():Object{
    return({width: "100px", border: this.border, borderRadius: 25})
  }

  barFill(questionNumber:number,questionsLength:number):Object{
    return({height: "20px",
    width: `${((questionNumber) / questionsLength) * 100}%`,
    backgroundColor: this.color1,
    borderRadius: 25,})
  }

  static Factory(): InfoStyles {
    return new InfoStyles();
  }
}
