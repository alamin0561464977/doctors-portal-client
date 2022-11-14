import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ selectedDate, treatment }) => {
    console.log(treatment)
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle bg-slate-200" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <form>
                        <input type="text" readOnly defaultValue={format(selectedDate, "PP")} className="input bg-slate-400 text-white font-bold input-bordered w-full rounded-lg my-2" />
                        <select
                            className="select select-bordered w-full bg-slate-400 text-white font-bold   rounded-lg my-2">
                            {
                                treatment.slots.map(potion => <option >{potion}</option>)
                            }
                        </select>
                        <input type="text" required placeholder="Full Name" className="input font-bold input-bordered w-full rounded-lg my-2" />
                        <input type="number" required placeholder="Phone Number" className="input font-bold input-bordered w-full rounded-lg my-2" />
                        <input type="email" required placeholder="Email" className="input font-bold input-bordered w-full rounded-lg my-2" />
                        <input type="submit" value='SUBMIT' className="input bg-slate-700 text-white font-bold input-bordered w-full rounded-lg my-2" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;