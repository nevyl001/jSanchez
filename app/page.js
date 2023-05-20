"use client";
import Image from "next/image";
import styles from "./home.module.sass";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.navDesktop}>
        <div className={styles.link} onClick={() => goToSection("home")}>
          <Image
            src="/img/log1.png"
            width={60}
            height={80}
            alt="Jorge Sanchez"
            className={styles.image}
          />
        </div>
        <div className={styles.link} onClick={() => goToSection("home")}>
          HOME
        </div>
        <div className={styles.link} onClick={() => goToSection("historia")}>
          BIO
        </div>

        <div className={styles.link} onClick={() => goToSection("prensa")}>
          GALERIA
        </div>
        <div className={styles.link} onClick={() => goToSection("contacto")}>
          CONTACTO
        </div>
      </nav>
      <div className={styles.header}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className={styles.img}>
            <Image
              src="/img/jorge-sanchez.png"
              width={1532}
              height={712}
              alt="Jorge Sanchez"
              className={styles.image}
            />
          </div>
        </motion.div>
      </div>
      <main className={styles.pageHome} id="home">
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <section className={styles.mainPhoto}>
            <Image
              src="/img/photo-1.jpg"
              width={1280}
              height={1600}
              alt="Jorge Sanchez"
            />
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <section className={styles.frase}>
            <h3>
              “EL FÚTBOL ES UN JUEGO QUE SE JUEGA CON EL CEREBRO. DEBES ESTAR EN
              EL LUGAR ADECUADO, EN EL MOMENTO ADECUADO. NI DEMASIADO PRONTO NI
              DEMASIADO TARDE.” - Johan Cruyff
            </h3>
          </section>
        </motion.div>
        <section className={styles.historia} id="historia">
          <div className={styles.box_left}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <h2>BIO</h2>
              <div className={styles.text}>
                <p>Fecha de nacimiento: 10 de diciembre, 1997</p>
                <p>Lugar de nacimiento: Torreón, Coahuila</p>
                <p>Estatura: 1.75 m</p>
                <p>Posición: Lateral Derecho</p>
                <p>Número: 19</p>
              </div>
            </motion.div>
          </div>

          <div className={styles.box_right}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <h2>CLUBES</h2>
              <div className={styles.text}>
                <div className={styles.clubs}>
                  <div className={styles.name}>
                    <p>Santos Laguna: 2016-2018</p>
                  </div>
                  <div className={styles.logo}>
                    <Image
                      src="/img/san.png"
                      width={50}
                      height={100}
                      alt="santos"
                    />
                  </div>
                </div>
                <div className={styles.clubs}>
                  <div className={styles.name}>
                    <p>Club América: 2018-2022</p>
                  </div>
                  <div className={styles.logo}>
                    <Image
                      src="/img/ame.png"
                      width={50}
                      height={100}
                      alt="ame"
                    />
                  </div>
                </div>
                <div className={styles.clubs}>
                  <div className={styles.name}>
                    <p>Ajax FC: 2022-</p>
                  </div>
                  <div className={styles.logo}>
                    <Image
                      src="/img/ajax.png"
                      width={50}
                      height={100}
                      alt="ajax"
                    />
                  </div>
                </div>
                <div className={styles.clubs}>
                  <div className={styles.name}>
                    <p>Selección Nacional: 2019-</p>
                  </div>
                  <div className={styles.logo}>
                    <Image src="/img/sm.png" width={50} height={100} alt="sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className={styles.palmares}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.title}>
              <h2>PALMARES</h2>
            </div>
            <div className={styles.club}>
              <div className={styles.titulo}>
                <p>Campeón Clausura 2018 Liga MX (Santos Laguna)</p>
              </div>
              <div className={styles.copa}>
                <Image src="/img/lmx.png" width={70} height={100} alt="sm" />
              </div>
            </div>
            <div className={styles.club}>
              <div className={styles.titulo}>
                <p>Campeón Apertura 2018 Liga MX (Club América)</p>
              </div>
              <div className={styles.copa}>
                <Image src="/img/lmx2.png" width={80} height={100} alt="sm" />
              </div>
            </div>
            <div className={styles.club}>
              <div className={styles.titulo}>
                <p>Campeón Copa MX 2019</p>
              </div>
              <div className={styles.copa}>
                <Image src="/img/cmx.png" width={75} height={100} alt="sm" />
              </div>
            </div>
            <div className={styles.club}>
              <div className={styles.titulo}>
                <p>Campeón de Campeones 2019</p>
              </div>
              <div className={styles.copa}>
                <Image src="/img/ccn.png" width={70} height={100} alt="sm" />
              </div>
            </div>
            <div className={styles.club}>
              <div className={styles.titulo}>
                <p>
                  Medalla Bronce JJOO Tokio 2021 (Selección Nacional Sub 23)
                </p>
              </div>
              <div className={styles.copa}>
                <Image src="/img/tok.png" width={60} height={100} alt="sm" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.prensa} id="prensa">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>GALERIA</h2>
          </motion.div>
          <div className={styles.gallery}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.principal}>
                <Image
                  src="/img/gallery-1.jpg"
                  width={2048}
                  height={1365}
                  alt="Jorge Sanchez - Galeria"
                />
              </div>
            </motion.div>
            <div className={styles.divider} />
            <div className={styles.photos}>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-2.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez - Galeria"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-3.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez - Galeria"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-4.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez"
                  />
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/img/gallery-5.jpg"
                    width={1066}
                    height={1600}
                    alt="Jorge Sanchez"
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.pho2}>
              <div className={styles.photos}>
                <div className={styles.photo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/img/n1.png"
                      width={1920}
                      height={1080}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </motion.div>
                </div>
                <div className={styles.photo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/img/n2.png"
                      width={1920}
                      height={1080}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className={styles.pho3}>
              <div className={styles.photos}>
                <div className={styles.photo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/img/n3.png"
                      width={1920}
                      height={1080}
                      alt="Jorge Sanchez"
                    />
                  </motion.div>
                </div>
                <div className={styles.photo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/img/n4.png"
                      width={1920}
                      height={1080}
                      alt="Jorge Sanchez"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.imgnike}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.imgprin}>
              <Image
                src="/img/nikimg.png"
                width={1920}
                height={1080}
                alt="Jorge Sanchez - Galeria"
              />
            </div>
          </motion.div>
        </section>

        <section className={styles.contacto} id="contacto">
          <div className={styles.left}>
            <div className={styles.title}>
              <h2>REDES</h2>
            </div>
            <div className={styles.linksre}>
              <Link
                href="https://www.facebook.com/Sanchez-Jorgie-111292158098168/?ref=page_internal"
                target="_blank"
              >
                <Image
                  src="/img/fa.svg"
                  width={100}
                  height={150}
                  alt="facebook"
                />
              </Link>
              <Link href="https://www.twitch.tv/jorgie_sanchez" target="_blank">
                <Image src="/img/tw.svg" width={100} height={150} alt="tw" />
              </Link>
              <Link
                href="https://www.instagram.com/sanchezjorgie4/"
                target="_blank"
              >
                <Image src="/img/ins.svg" width={100} height={150} alt="ins" />
              </Link>
              <Link
                href="https://www.tiktok.com/@sanchezjorgie4?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <Image src="/img/tikt.svg" width={100} height={150} alt="tt" />
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <h2>CONTACTO</h2>
            <Link href="mailto:contacto@jorgesanchez4.com">
              <button>contacto@jorgesanchez4.com</button>
            </Link>
          </div>
        </section>
        <footer>Jorge Sanchez 2023 @ Todos los derechos reservados.</footer>
      </main>
    </>
  );
}
