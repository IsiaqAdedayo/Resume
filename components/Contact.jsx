import { useState } from "react"

const Contact = () => {

    const [contactVals, setContactVals] = useState({
        name: "",  
        email: "",
        phoneNumber: "",
        message: ""  
    })

    const handleChange = (event) => {
        setContactVals((prevProps) => ({
            ...prevProps, 
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(contactVals);
        setContactVals({
            name: "",  
            email: "",
            phoneNumber: "",
            message: ""
        })
    }

    return (
        <div className="bg-bgC bg-cover bg-fixed w-full overflow-hidden relative bg-no-repeat bg-center py-14 p-4 md:p-14" id="contact">
            <h1 className="tracking-widest md:text-2xl md:mb-16 font-semibold text-center font-OpenSansBold">
                CONTACT ME
            </h1>
            <div className="flex flex-col md:grid md:grid-cols-2 justify-between w-full">
                <form className="text-center" onSubmit={handleSubmit}>
                    <div className="my-3 space-y-4">
                        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={contactVals.name} className="py-5 p-3 w-full text-sm text-white bg-bgCoffTrns border border-gray-400 outline-none" required />

                        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={contactVals.email} className="py-5 p-3 w-full text-sm text-white bg-bgCoffTrns border border-gray-400 outline-none" required/>

                        <input type="number" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} value={contactVals.phoneNumber} className="py-5 p-3 w-full text-sm text-white bg-bgCoffTrns border border-gray-400 outline-none" required/>

                        <textarea name="Message" name="message" onChange={handleChange} placeholder="Message" value={contactVals.message} className="py-5 p-2 w-full text-sm text-white bg-bgCoffTrns border border-gray-400 outline-none" rows="10" required></textarea>
                    </div>
                    <input type="submit" value="Send Message" className="py-3 px-8 text-white bg-bgCoffTrns rounded" />
                </form>

                <div className="mt-10 md:mt-1 font-bold text-left md:w-9/12 md:ml-28">
                    <h1 className="font-extrabold mb-2 text-xl">Address and Phone</h1>
                    <h1>Showande Adedayo</h1>
                    <a className="hover:text-blue-800" href="mailto:hadedaryor@gmail.com">hadedaryor@gmail.com</a>
                    <br />
                    <a className="hover:text-blue-800" href="tel:+2348091163372">08091163372</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
