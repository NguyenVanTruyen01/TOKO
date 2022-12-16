import React from 'react'
import styles from './styles/modal.module.scss'

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalMain}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        Báo cáo vi phạm
                    </div>
                    <div className={styles.ic}>
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Tin rao nay co van de gi <span>*</span>
                        </div>
                        <div className={styles.listBtn}>
                            <label className={styles.container}>Lừa đảo
                                <input type="radio" defaultChecked="checked" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Trùng lặp
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Bất động sản đã bán
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Không liên lạc được
                                <input type="radio" defaultChecked="checked" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Thông tin bất động sản không đúng thực tế
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Thông tin người dùng không đúng thực tế
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark} />
                            </label>
                            <label className={styles.container}>Lý do khác
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark} />
                            </label>

                        </div>

                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Chi tiet <span>*</span>
                        </div>
                        <div className={styles.des}>
                            <textarea placeholder='Vui long them mo ta ve dau hieu lua dao'></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
