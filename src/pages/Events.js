import "./Events.css"
import React, { useState } from 'react'; 
import Icons from "../components/Icons";
import EventItem from "./EventItem";


function Events() {

    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (event) => {
      setSelectedDay(event.target.value);
      setSelectedTime(event.target.value);
    };
    
   

    const eventItems = [
        { id: 1, eventName: 'Kansas City Chiefs vs Buffalo Bills', date: 'Sunday • 3:30 PM' },
        { id: 2, eventName: 'Miami Dophins vs Kansas City Chiefs', date: 'Saturday • 4:50 PM' },
        { id: 3, eventName: 'Kansas City Chiefs vs Los Angeles Chargers', date: 'Monday • 4:00 PM' },
        // Add more event items as needed
      ]
    
        const filteredEventItems = eventItems.filter((item) => {
        const isSearchMatch = item.eventName.toLowerCase().includes(searchTerm.toLowerCase());
        const isDayMatch = !selectedDay || item.date.includes(selectedDay);
        const isTimeMatch = !selectedTime || item.date.includes(selectedTime);

        return isSearchMatch && isDayMatch && isTimeMatch;
        });

    return  (
        <div>
            <h1 className="event-title">Events</h1>
            <div className= "inputbars">
               
                    <input className= "text"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                
               
                    <div className= "times">
                        <select className= "time" value={selectedTime} onChange={handleChange} style={{ width: '300px', height: '40px'}}> 
                        <option value="" disabled selected>
                            Time 
                        </option>
                        <option value="3">3</option> 
                        <option value="3:30">3:30</option> 
                        <option value="3:50">3:50</option> 
                        <option value="4">4</option> 
                        <option value="4:30">4:30</option> 
                        <option value="4:50">4:50</option> 
                        </select> 
                    </div>
                    <div className= "dates">
                        <select className= "date" value={selectedDay} onChange={handleChange} style={{ width: '400px', height: "40px" }}> 
                        <option value="" disabled selected>
                            Date
                        </option>
                        <option value="Friday">Friday</option> 
                        <option value="Saturday">Saturday</option> 
                        <option value="Sunday">Sunday</option> 
                        <option value="Monday">Monday</option> 
                        <option value="Tuesday">Tuesday</option> 
                        </select> 
                    </div>
             
            </div>
            < div className="eventitems">
            {filteredEventItems.map((item) => (
                <EventItem key={item.id} eventName={item.eventName} date={item.date} />
            ))}


            </div>
            <Icons />
        </div>
    )
}
export { Events };




