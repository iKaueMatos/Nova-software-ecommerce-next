import Logo from "assets/icons/logo";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__description">
            <h6>
              <Logo />
              Nova Software
            </h6>
            <p>Desenha roupas para jovens, idosos e todos no meio - mas mais importante, para os fashionistas</p>
            <ul className="footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="footer__links">
            <ul>
              <li>Compras online</li>
              <li><a href="#">Status do Pedido</a></li>
              <li><a href="#">Envio e Entrega</a></li>
              <li><a href="#">Devoluções</a></li>
              <li><a href="#">Opções de Pagamento</a></li>
              <li><a href="#">Contate-nos</a></li>
            </ul>
            <ul>
              <li>Informações</li>
              <li><a href="#">Cartões de Presente</a></li>
              <li><a href="#">Encontrar uma loja</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Torne-se um membro</a></li>
              <li><a href="#">Feedback do Site</a></li>
            </ul>
            <ul>
              <li>Contato</li>
              <li><a href="#">Novasoftwareorganization@gmail.com</a></li>
              <li><a href="#">11 987482173</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2024. Todos os direitos autorais reservados.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer
