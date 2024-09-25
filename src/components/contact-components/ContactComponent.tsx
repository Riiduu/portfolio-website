import ContactImg from '../../assets/project-assets/Group 2378.png'
import SendIcon from '../../assets/project-assets/Send-Icon.png'

const ContactComponent = () => {
    return (
            <div className=" flex flex-col md:flex-row justify-center h-96 mt-28 md:justify-between relative items-center mx-4 md:mx-4 lg:mx-8 xl:mx-0 md:space-x-10">
                <div>
                    <h1 className="text-6xl text-white text-center md:text-left">Got a project in <br/><span className="text-[var(--color-3)] font-medium ">mind?</span></h1>
                    <img width="500px" src={ContactImg} alt=""/>

                </div>


                <form action="https://getform.io/f/arolqyxb" method="POST" className="m-auto space-y-4 mt-5 md:mt-auto">
                    <div className="flex flex-row space-x-2">
                        <input type='text' placeholder='Name' name="name" required
                               className="w-full rounded-md py-3 focus:outline-none outline-green-500 px-4 text-white bg-[#393E46] bg-opacity-50 text-sm "/>
                        <input type='email' placeholder='Email' name="email" required
                               className="w-full rounded-md py-3 focus:outline-none px-4 text-white bg-[#393E46] bg-opacity-50 text-sm "/>
                    </div>
                    <input type='text' placeholder='Subject' name="subject" required
                           className="w-full rounded-md py-3 focus:outline-none px-4 text-white bg-[#393E46] bg-opacity-50 "/>
                    <textarea placeholder='Message' rows={6} name="message" required
                              className="w-full rounded-md px-4 focus:outline-none text-white bg-[#393E46] bg-opacity-50 pt-3 "></textarea>
                    <button type='submit'
                            className="py-2 px-5 rounded-3xl flex text-lg hover:drop-shadow-lg font-medium flex-row items-center justify-center text-white bg-[var(--color-3)]">
                        Send
                        <img alt="" className="ml-1 mt-1" width="25px" src={SendIcon}/>
                    </button>
                </form>
            </div>
    )
}

export default ContactComponent

/*
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
                <button className="Contact__submit_button" type="submit">Send Message <img width="30px" src={SendIcon}
                                                                                           alt=""/>
                </button>
            </form>
 */