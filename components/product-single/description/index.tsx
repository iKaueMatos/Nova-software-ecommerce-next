type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detalhes e descrição do produto</h4>
        <p>Camiseta Branca Summer Vibes na linha uiKit com estampa colorida. <br></br>Feita de algodão jersey. A camiseta combina perfeitamente com jeans, calças ou shorts.</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detalhes e descrição do produto</h4>
        <p>Camiseta Branca Summer Vibes na linha uiKit com estampa colorida. <br></br>Feita de algodão jersey. A camiseta combina perfeitamente com jeans, calças ou shorts.</p>
      </div>
    </section>
  );
};

export default Description;
