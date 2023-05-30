"use client";
import Image from "next/image";
import styles from "../home.module.sass";
import { motion } from "framer-motion";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function Home() {
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
      <div className={styles.galery_light}>
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
              src="/img/gallery-3.jpg"
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
              src="/img/gallery-5.jpg"
              width={1066}
              height={1600}
              alt="Jorge Sanchez"
            />,
            <Image
              key="6"
              src="/img/n1.png"
              width={1920}
              height={1080}
              alt="Jorge Sanchez - Galeria"
            />,
            <Image
              key="7"
              src="/img/n2.png"
              width={1920}
              height={1080}
              alt="Jorge Sanchez - Galeria"
            />,
            <Image
              key="8"
              src="/img/n3.png"
              width={1920}
              height={1080}
              alt="Jorge Sanchez"
            />,
            <Image
              key="9"
              src="/img/n4.png"
              width={1920}
              height={1080}
              alt="Jorge Sanchez"
            />,
          ]}
        />
      </div>
      <main className={styles.pageHome} id="home">
        <section className={styles.prensa} id="prensa">
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
                      src="/img/gallery-3.jpg"
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
                      src="/img/gallery-5.jpg"
                      width={1066}
                      height={1600}
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
                    <div onClick={() => openLightboxOnSlide(6)}>
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
                    <div onClick={() => openLightboxOnSlide(7)}>
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
            <div className={styles.pho3}>
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
                        src="/img/n3.png"
                        width={1920}
                        height={1080}
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
                        src="/img/n4.png"
                        width={1920}
                        height={1080}
                        alt="Jorge Sanchez"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>Jorge Sánchez 2023 @ Todos los derechos reservados.</footer>
      </main>
    </>
  );
}
