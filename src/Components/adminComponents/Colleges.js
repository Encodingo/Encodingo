import { React, useState, useEffect } from 'react'
import axios from 'axios';
const Colleges = () => {

    const [colleges, setColleges] = useState([]);
    useEffect(() => {

        // Fetching All Trainings 
        axios.get(`${process.env.REACT_APP_HOST_URL}/api/getAllColleges`)
            .then(res => { setColleges(res.data) })
            .catch(err => { console.log(err); })

    });

    return (
        <section className="college">
            <h1>Colleges</h1>

            <div className="boxes">

                {
                    colleges.map(college => {
                        return (
                            <div className="box">
                                <div className="name">
                                    <p><b>Name:</b> {college.name}</p>
                                    <p><b>Email:</b> {college.email}</p>
                                    <p><b>Phone:</b> {college.phone}</p>
                                    <p><b>Designation:</b> {college.designation}</p>
                                    <p><b>Organization:</b> {college.organization}</p>
                                    <p><b>Message:</b> {college.message}</p>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className="box">
                    <div className="name">
                        <p><b>Name:</b> MGP</p>
                        <p><b>Email:</b> MGP</p>
                        <p><b>Phone:</b> MGP</p>
                        <p><b>Designation:</b> MGP</p>
                        <p><b>Organization:</b> MGP</p>
                        <p><b>Message:</b> MGP</p>
                    </div>
                </div>
                <div className="box">
                    <div className="name">
                        <p><b>Name:</b> MGP</p>
                        <p><b>Email:</b> MGP</p>
                        <p><b>Phone:</b> MGP</p>
                        <p><b>Designation:</b> MGP</p>
                        <p><b>Organization:</b> MGP</p>
                        <p><b>Message:</b> MGP</p>
                    </div>
                </div> */}

            </div>


        </section >
    )
}

export default Colleges