import { Button } from "@/components/button";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
            <section className={styles.container}>

                <div className={styles.sectionLeft}>
                    <div className={styles.overlay}></div>
                    <div className={styles.buttonWrapper}>
                        <Button label="Montage" href="accueil"/>
                    </div>
                </div>

                <div className={styles.sectionRight}>
                    <div className={styles.overlay}></div>
                    <div className={styles.buttonWrapper}> 
                        <Button label="Copywriting" href="accueil"/>
                    </div>
                </div>
            </section>
    );
}
