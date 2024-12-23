import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MakeQuestions() {
    const handleMessage = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!', {
        
        });
      };

    return (
      <div>
        <div className='pb-6'>
        <h1 className='text-2xl font-bold text-center'>What Questions Do Our Customers  <br /><span className='text-blue-500'>Ask Most Often?</span></h1>
        <p></p>
        </div>
          <div className='w-full  lg:grid  lg:grid-cols-2 gap-2 items-center' >
            
            <div className='space-y-3'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How Much Does it Cost</div>
                    <div className="collapse-content">
                        <p>The Lost and Found App is free of charge for up to 1,000 new registered items per year.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can I Import My Exiting Data</div>
                    <div className="collapse-content">
                        <p>Yes! We integrate your historic lost and found data for free.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Will My Team Need Training</div>
                    <div className="collapse-content">
                        <p>We've had lots of customers participate in the beta for the Lost and Found App, and the feedback we've received is that it is incredibly intuitive. However, we do realize that new things take some getting used to. This is why you can schedule webinars that help your team make the move to the new Lost and Found App.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Who Can I Hlep Me Set Everything Up?</div>
                    <div className="collapse-content">
                        <p>Our team can guide you through the entire process. Just get in touch and let us know what you need.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            {/* Cotact us */}
            <div>
            <h2 className="text-center text-3xl font-semibold pb-5 tracking-tight">Do You Have Any Question?</h2>
            <div className="w-full max-w-md mx-auto rounded-lg  px-10 pb-10 pt-8 shadow-md bg-base-200">
        
                <form className="w-full space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="name"
                            placeholder="Your Name"
                            name="name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_email">
                            Email
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Your Email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_message">
                            Message
                        </label>
                        <textarea
                            className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_message"
                            placeholder="what's in your mind"
                            name="message"
                        />
                    </div>
                    <button 
                    onClick={handleMessage}
                    className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Send Message</button>
                </form>
            </div>
            </div>

        </div>
        <ToastContainer></ToastContainer>
      </div>
    )
}
