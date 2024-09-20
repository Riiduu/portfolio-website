import './ContactComponent.css'

import ContactImg from '../../assets/project-assets/Group 2378.png'
import SendIcon from '../../assets/project-assets/Send-Icon.png'

const ContactComponent = () => {
    return (
        <div className="Contact__container">
            <div className="Contact__img_container">
                <h1>Got a project in <br/><span className="Contact__text_blue">mind?</span></h1>
                <img width="500px" src={ContactImg} alt=""/>

            </div>

            <form action="https://getform.io/f/arolqyxb" method="POST" className="Contact__form_container">
                <div className="Contact__form_basic_info">
                    <div className="Contact__form_col">
                        <label className="Contact__form_label" htmlFor="">Name</label>
                        <input required className="Contact__input_styling" type="text" name="name"/>
                    </div>

                    <div className="Contact__form_col">
                        <label className="Contact__form_label" htmlFor="">Email</label>
                        <input required className="Contact__input_styling" type="text" name="email"/>
                    </div>
                </div>
                <div className="Contact__form_col">
                    <label className="Contact__form_label" htmlFor="">Message</label>
                    <textarea required className="Contact__input_styling Contact__message" name="message"/>
                </div>
                    <button className="Contact__submit_button" type="submit">Send Message <img width="30px" src={SendIcon} alt=""/>
                    </button>
            </form>
        </div>
)
}

export default ContactComponent