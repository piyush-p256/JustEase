import LawyerCard from './../../components/Lawyers/LawyerCard.jsx';
import {lawyers} from './../../assets/data/lawyers.js';
import Testimonial from '../../components/Testimonial/Testimonial.jsx';

const Lawyers = () => {
  return <>
  

    <section>
      <div className="container">

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {lawyers.map((lawyer)=> <LawyerCard key={lawyer.id} lawyer={lawyer}/>)}
      </div>

      </div>
    </section>

    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>What our clients say</h2>
          <p>World-class consultancy for everyone. Our System offers unmatched, expert legal services.</p>
        </div>
        <Testimonial/>
      </div>
    </section>

  </>
}

export default Lawyers;
