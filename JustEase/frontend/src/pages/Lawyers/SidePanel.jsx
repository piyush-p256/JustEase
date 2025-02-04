const SidePanel = () => {
  return <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
    <div className="flex items-center justify-between">
        <p className='text__para mt-0 font-semibold'>Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>Rs 1000</span>
    </div>

    <div className="mt-[30px]">
        <p className='text__para mt-0 font-semibold text-headingColor'>Available Time Slots:</p>

        <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>

                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
            </li>

            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Tuesday</p>

                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
            </li>

            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>Thursday</p>

                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 PM</p>
            </li>
        </ul>
    </div>

    <button className='btn px-2 w-full rounded-md'><a href="https://rzp.io/l/bUnYe5jeI">Book Appointment</a></button>

  </div>
}

export default SidePanel;
