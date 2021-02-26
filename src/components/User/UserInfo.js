import React, { useState, useEffect } from 'react';
import './UserInfo.css';




const UserInfo = () => {


    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);




    useEffect(() => {

        setLoading(true)
        fetch("https://api.randomuser.me/")
            .then((response) => response.json())
            .then(json => {
                setData({
                    name: json.results[0].name.first,
                    lastName: json.results[0].name.last,
                    email: json.results[0].email,
                    phone: json.results[0].phone,
                    picture: json.results[0].picture.large,
                    state: json.results[0].location.state,
                    country: json.results[0].location.country,
                })
            }).catch(err => { console.log(err) })
            .finally(() => { setLoading(false) })


    }, [])




    return (


        <div className="card">

            {loading ?
                <h2>Loading data...</h2>
                :
                <h2>{data.name} {data.lastName}</h2>
            }


            <div className="picture">
                <img src={data.picture} alt="fictitious user" />
            </div>

            <div className="location">
                <p>{data.state},</p>
                <p>{data.country}</p>
            </div>
            <div className="contact-list">
                <ul>
                    <li>{data.email}</li>
                </ul>

            </div>



        </div>


    )
}

export default UserInfo;