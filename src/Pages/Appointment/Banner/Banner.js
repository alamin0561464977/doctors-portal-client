import { DayPicker } from 'react-day-picker';
import bannerImg from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';

const Banner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div style={{ backgroundImage: `url("${bgChair}")` }} className='grid mt-8 px-8 grid-cols-2'>
            <div className='flex justify-center'>
                <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                ></DayPicker>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;