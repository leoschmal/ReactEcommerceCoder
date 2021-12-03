import './Footer.css'

export const Footer = () =>{


    return(
        <>
        <div className="footerContainer">
        <footer class="footer">
        <div class="contenedor">
            <div class="barra">
                <a class="logo" href="index.html">
                    <h1 class="logo__nombre no-margin centrar-texto">by<span class="logo__bold">VEGAN</span></h1>
                </a>                
            </div>
            <div class="firma">
                <p>Creado por <strong><a href="https://leoschmal.com.ar" target="_blank" rel="noopener noreferrer"
                            >
                             Leonardo Schmal  </a></strong> | Todos los derechos reservados 2021</p>
            </div>
        </div>
    </footer>
        </div>
        </>
        )
}