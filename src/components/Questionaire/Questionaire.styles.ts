import AppStyles from '../../App.styles';

export default class QuestionaireStyles extends AppStyles {
  
  questionaire():Object{
    return({
      height: '300px',
      width: '40vw',
      minWidth: '280px',
      margin: 20,
      textAlign: 'center',
      borderRadius: 25,
      border: `2px solid black`,
      ...this.container('column'),
      backgroundColor: this.color1
    })
  }

  static Factory(): QuestionaireStyles {
    return new QuestionaireStyles();
  }
}
