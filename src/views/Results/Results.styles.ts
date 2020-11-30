import AppStyles from '../../App.styles';

export default class ResultsStyles extends AppStyles {
  
  display():Object{
    return({
      minHeight: '50vh',
      width: '40vw',
      minWidth: '280px',
      margin: 20,
      textAlign: 'center',
      borderRadius: 25,
      border: `2px solid black`,
      ...this.container('column'),
      backgroundColor: 'rgba(255, 255, 255, 0.70)'
    })
  }

  static Factory(): ResultsStyles {
    return new ResultsStyles();
  }
}
