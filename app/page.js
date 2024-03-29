"use client";
import Image from "next/image";
import styles from "./home.module.sass";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function Home() {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

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
          GALERÍA
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
              src="/img/js2.png"
              width={957}
              height={456}
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
              src="/img/j6p.jpg"
              width={6000}
              height={4000}
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
              &quot;CADA OBSTÁCULO SUPERADO ES UN ESCALÓN MÁS CERCA DE LA
              GRANDEZA.&quot; - Jorge Sánchez
            </h3>
          </section>
        </motion.div>
        <section className={styles.historia} id="historia">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>BIO</h2>
            <div className="row1-container">
              <div className="box box-down">
                <div className="title">
                  <h4>Número:</h4>
                </div>
                <p>15</p>
              </div>
              <div className="box red">
                <div className="title">
                  <h4>Lugar de nacimiento:</h4>
                </div>
                <p>Torreón, Coahuila</p>
              </div>
              <div className="box box-down">
                <div className="title">
                  <h4>Posición:</h4>
                </div>
                <p>Lateral Derecho</p>
              </div>
            </div>
            <div className="row2-container">
              <div className="box">
                <div className="title">
                  <h4>Fecha de nacimiento:</h4>
                </div>
                <p>10 de diciembre, 1997</p>
              </div>
              <div className="box">
                <div className="title">
                  <h4>Estatura:</h4>
                </div>
                <p>1.75 m</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.clubs}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>CLUBES</h2>
            <div className="hero-section">
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/jsantos.webp)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Santos Laguna 2016-2018</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/jsame.png)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Club América 2018-2022</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/jsajaxjue.png)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">La Eredivisie</p>
                    <h3 className="card__heading">Ajax FC</h3>
                    <h3 className="card__heading">2022 - 2023</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/j3p.jpg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Primera Liga</p>
                    <h3 className="card__heading">Porto FC</h3>
                    <h3 className="card__heading">2023 -</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/jsme.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">México</p>
                    <h3 className="card__heading">Selección Nacional</h3>
                    <h3 className="card__heading">2019 -</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.palmares}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>PALMARÉS</h2>

            <div className="hero-section">
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/sancamp.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Campeón Clausura 2018</h3>
                    <h3 className="card__heading">Santos FC</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/ligacamp.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Campeón Apertura 2018</h3>
                    <h3 className="card__heading">Club América</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/cocacamp.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Campeón Copa</h3>
                    <h3 className="card__heading">Club América</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-section">
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/ccame.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Liga MX</p>
                    <h3 className="card__heading">Campeón de Campeones 2019</h3>
                    <h3 className="card__heading">Club América</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/jstokio.png)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">JJOO Tokio</p>
                    <h3 className="card__heading">Medalla Bronce 2021</h3>
                    <h3 className="card__heading">México</h3>
                  </div>
                </div>
              </div>
              <div className="card-grid">
                <div className="card">
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(/img/CoOCamp.jpeg)" }}
                  ></div>
                  <div className="card__content">
                    <p className="card__category">Copa De Oro 2023</p>
                    <h3 className="card__heading">Campeón</h3>
                    <h3 className="card__heading">México</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.prensa} id="prensa">
          <FsLightbox
            toggler={lightboxController.toggler}
            slide={lightboxController.slide}
            sources={[
              <Image
                key="1"
                src="/img/gallery-1.jpg"
                width={2048}
                height={1365}
                alt="Jorge Sanchez - Galeria"
              />,
              <Image
                key="2"
                src="/img/gallery-2.jpg"
                width={1066}
                height={1600}
                alt="Jorge Sanchez - Galeria"
              />,
              <Image
                key="3"
                src="/img/js1.jpg"
                width={1066}
                height={1600}
                alt="Jorge Sanchez - Galeria"
              />,
              <Image
                key="4"
                src="/img/gallery-4.jpg"
                width={1066}
                height={1600}
                alt="Jorge Sanchez"
              />,
              <Image
                key="5"
                src="/img/js4.jpg"
                width={1066}
                height={1600}
                alt="Jorge Sanchez"
              />,
              <Image
                key="6"
                src="/img/j1p.jpg"
                width={6000}
                height={4000}
                alt="Jorge Sanchez"
              />,
              <Image
                key="7"
                src="/img/j2p.jpg"
                width={6000}
                height={4000}
                alt="Jorge Sanchez"
              />,
              <Image
                key="8"
                src="/img/j3p.jpg"
                width={6000}
                height={4000}
                alt="Jorge Sanchez"
              />,
              <Image
                key="9"
                src="/img/j4p.jpg"
                width={6000}
                height={4000}
                alt="Jorge Sanchez"
              />,
              <Image
                key="10"
                src="/img/n1.png"
                width={1920}
                height={1080}
                alt="Jorge Sanchez - Galeria"
              />,
              <Image
                key="11"
                src="/img/n2.png"
                width={1920}
                height={1080}
                alt="Jorge Sanchez - Galeria"
              />,
            ]}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2>GALERÍA</h2>
          </motion.div>
          <div className={styles.gallery}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.principal}
                onClick={() => openLightboxOnSlide(1)}
              >
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
                  <div onClick={() => openLightboxOnSlide(2)}>
                    <Image
                      src="/img/gallery-2.jpg"
                      width={1066}
                      height={1600}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </div>
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(3)}>
                    <Image
                      src="/img/js1.jpg"
                      width={1066}
                      height={1600}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </div>
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(4)}>
                    <Image
                      src="/img/gallery-4.jpg"
                      width={1066}
                      height={1600}
                      alt="Jorge Sanchez"
                    />
                  </div>
                </motion.div>
              </div>

              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(5)}>
                    <Image
                      src="/img/js4.jpg"
                      width={1066}
                      height={1600}
                      alt="Jorge Sanchez"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.photos}>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(6)}>
                    <Image
                      src="/img/j1p.jpg"
                      width={6000}
                      height={4000}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </div>
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(7)}>
                    <Image
                      src="/img/j2p.jpg"
                      width={6000}
                      height={4000}
                      alt="Jorge Sanchez - Galeria"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.photos}>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(8)}>
                    <Image
                      src="/img/j3p.jpg"
                      width={6000}
                      height={4000}
                      alt="Jorge Sanchez"
                    />
                  </div>
                </motion.div>
              </div>
              <div className={styles.photo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div onClick={() => openLightboxOnSlide(9)}>
                    <Image
                      src="/img/j4p.jpg"
                      width={6000}
                      height={4000}
                      alt="Jorge Sanchez"
                    />
                  </div>
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
                    <div onClick={() => openLightboxOnSlide(10)}>
                      <Image
                        src="/img/n1.png"
                        width={1920}
                        height={1080}
                        alt="Jorge Sanchez - Galeria"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className={styles.photo}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div onClick={() => openLightboxOnSlide(11)}>
                      <Image
                        src="/img/n2.png"
                        width={1920}
                        height={1080}
                        alt="Jorge Sanchez - Galeria"
                      />
                    </div>
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

        <footer>Jorge Sánchez 2023 @ Todos los derechos reservados.</footer>
      </main>
    </>
  );
}
