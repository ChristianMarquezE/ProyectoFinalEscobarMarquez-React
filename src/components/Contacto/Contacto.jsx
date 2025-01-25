import './Contacto.css';
export default function Contacto() {
  return (
    <>
      <main className="montserrat-light">
        <section className="contacto">
          <h2 className="contacto-title">Contacto</h2>

          <div className="contacto-content">
            <div className="contacto-info">
              <h3>Josefina Orrego</h3>
              <h3>SIGUEME</h3>
              <p>@jorregodesign</p>
              <h3>ESCRIBEME</h3>
              <p>
                <strong>jorregor@udd.cl</strong>
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/2842cc59428ca989fcda5b1ca10ea9bf"
            method="post"
            className="contact-form"
          >
            <div className="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">
              <p className="montserrat-light">ENVIA UN MENSAJE</p>→
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
