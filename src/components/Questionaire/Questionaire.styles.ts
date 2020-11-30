import AppStyles from '../../App.styles';

export default class QuestionaireStyles extends AppStyles {
  
  questionaire():Object{
    return({ 
      height: '40vh',
      minHeight: '300px',
      width: '20vw',
      minWidth: '280px',
      margin: 20,
      textAlign: 'center',
      borderRadius: 25,
      border: `2px solid black`,
      ...this.container('column'),
      backgroundColor: this.color1
    })
  }
  
  public coolButton(sizeReference:number=2):Object {
    return ({

      borderRadius: 12.5 * sizeReference,
      border: this.border,
      width: 100 * sizeReference,
      height: 25 * sizeReference,
      backgroundColor: this.color2,
      ...this.text(sizeReference,this.color0,this.color1),
      ...this.container()
    })
  };

  static Factory(): QuestionaireStyles {
    return new QuestionaireStyles();
  }
}
