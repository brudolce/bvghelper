import AppStyles from '../../App.styles';

export default class CoolButtonStyles extends AppStyles {
  


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
  

  // TS does not allow me to override parent methods
  static Factory(): CoolButtonStyles {
    return new CoolButtonStyles();
  }
}
