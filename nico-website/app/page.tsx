import { Button } from "@/components/button";
import styles from "@/styles/Home.module.css";

export const metadata = {
    title: "Nicolas Michon",
    description: "Monteur vidéo et copywriter",
    icons: {
        icon: "../public/images/logo.png",
    },
};

export default function Home() {
    return (
        <section className={styles.container}>

            <div className={styles.sectionLeft}>
                <div className={styles.overlay}></div>
                <div className={styles.buttonWrapper}>
                    <Button label="Montage" href="accueilMontage"/>
                </div>
            </div>

            <div className={styles.sectionRight}>
                <div className={styles.overlay}></div>
                <div className={styles.buttonWrapper}> 
                    <Button label="Copywriting" href="accueilCopy"/>
                </div>
            </div>
        </section>
    );
}
