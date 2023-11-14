import React from 'react';

const Footer = () => {
    return (
       
        <div className="footer container  ">
            <div className="row footer-top ">
                <div className="col-lg-4 col-md-6 footer-info ">
                    <h2>Tiffany Flowers</h2>
                    <p className="pb-3"><em>Nos importa la satisfacción de nuestros clientes, por ello tratamos de ofrecer el mejor servicio.</em></p>
                    <p>Avenida Las flores 519 <br/>
                    El tallo 31092, Florilandia<br/>
                    <strong>Numero Telefónico:</strong> +52 456-4565<br/>
                    <strong>Correo Electrónico:</strong> florecitas@gmail.com<br/></p>
                    <div className="social-links mt-3">
                        <a href="http://www.facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="http://www.instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links ">
                    <h4>Mas información</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="/">Inicio</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a>Nosotros</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="/">Productos</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a>Terminos y condiciones</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a>Politicas de privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                &copy; Copyright <strong><span>Tiffany Flowers</span></strong>. Todos los derechos reservados.
            </div>
              
        </div>
        
    );
};

export default Footer;