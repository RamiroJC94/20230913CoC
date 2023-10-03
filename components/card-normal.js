(Mes, PriceT, PriceM, element) => {
  document.getelementid(element).innerhtml = `
    <div class="container">
        <div className="card">
            <div className="linesBoxLg"></div>
            <p class="CardSub0">${Mes} Mes</p>
            <p class="CardSubPrice00">$ ${PriceT}</p>
            <p class="CardSubMes">igual a $ ${PriceM} al mes</p>
            <button class="btt-suscribe">elige este plan</button>
        </div>
    </div>
    `;
};

class className extends HTMLElement {
  constructor(props) {
    super(props);
    this.state = {
      mes: props.mes,
      priceT: props.priceT,
      priceM: props.priceM,
    };
  }

  render() {
    this.shadow.innerHTML = `
        <div class="container">
            <div className="card">
                <div className="linesBoxLg"></div>
                <p class="CardSub0">${this.state.mes} Mes</p>
                <p class="CardSubPrice00">$ ${this.state.priceT}</p>
                <p class="CardSubMes">igual a $ ${this.state.priceM} al mes</p>
                <button class="btt-suscribe">elige este plan</button>
            </div>
        </div>        
        `;
  }
}
