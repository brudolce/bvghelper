export default class AppStyles {

  public color0:string = 'black';
  public color1:string = 'rgba(255, 255, 255, 0.70)'; 
  public color2:string = '#fdcd3b';
  public border:string = '2px solid black';

  public text(size:number=1, colour:string=this.color1, shadow:string=this.color0):Object{
    return ({
      fontSize:`${size*14}px`,
      textAlign: 'center',
      color: colour,
      textShadow: `1px 1px ${shadow}`
    })
  }

  public container(direction:string = 'row',justify='center'):Object {
    return ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: justify,
      flexWrap: 'wrap',
      flexDirection: direction
    })
  }

  public page(backgroundURL:string=''):Object {
    let containerSpec = this.container('column')
    return ({
      ...containerSpec,
      minHeight: '100vh',
      width: '100vw',
    })
  }

  static factory(): AppStyles {
    return new AppStyles();
  }
}
