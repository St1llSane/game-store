import {GrKey, GrContact, GrMoney, GrLike} from 'react-icons/gr'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterWrapper}>
        <div className={styles.FooterTop}>
          <ul className={styles.Advantages}>
            <li className={styles.AdvantagesItem}>
							<GrKey />
							Только лицензионные ключи</li>
            <li className={styles.AdvantagesItem}>
							<GrContact />
							Поддержка 24/7</li>
            <li className={styles.AdvantagesItem}>
							<GrMoney />
							Регулярные скидки и акции</li>
            <li className={styles.AdvantagesItem}>
							<GrLike />
              Тысячи положительных отзывов
            </li>
          </ul>
          <ul className={styles.Payment}>
            <li className={styles.PaymentItem}>
              <img src="images/payment/mir.svg" alt="mir" height={30} />
            </li>
            <li className={styles.PaymentItem}>
              <img src="images/payment/sbp.svg" alt="sbp" height={40}  />
            </li>
            <li className={styles.PaymentItem}>
              <img src="images/payment/visa.svg" alt="visa" height={54}  />
            </li>
            <li className={styles.PaymentItem}>
              <img src="images/payment/mastercard.svg" alt="mastercard" height={26}  />
            </li>
          </ul>
        </div>
				<div className={styles.FooterBottom}>
					Bottom
				</div>
      </div>
    </footer>
  )
}

export default Footer
