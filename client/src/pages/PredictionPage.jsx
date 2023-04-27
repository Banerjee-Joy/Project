import { useState } from "react"
import axios from 'axios'

const latitude = {
    0: 35.5951,
    1: 30.2692,
    2: 42.3601,
    3: 26.1901,
    4: 42.3736,
    5: 41.8781,
    6: 36.0796, 
    7: 39.9612,
    8: 39.7392,
    9: 40.0583,
    10: 34.0522,
    11: 36.1627,
    12: 29.9511, 
    13: 40.7128,
    14: 37.8044,
    15: 36.6177,
    16: 45.5152,
    17: 41.5801,
    18: 44.9429,
    19: 32.7157,
    20: 37.7749,
    21: 37.4337,
    22: 37.2939,
    23: 37.0454,
    24: 47.6062,
    25: 44.986656,
    26: 38.9072
    
}

const longitude = {
    0: -82.5515,
    1: -97.7431,
    2: -71.0589,
    3: -80.3659,
    4: -71.1097,
    5: -87.6298,
    6: -115.0940,
    7: -82.9988,
    8: -104.9903,
    9: -74.4057,
    10: -118.2437,
    11: -86.7816,
    12: -90.0715, 
    13: -74.0060,
    14: -122.2712,
    15: -121.9166,
    16: -122.6784,
    17: -71.4774,
    18: -123.0351,
    19: -117.1611,
    20: -122.4194,
    21: -122.4014,
    22: -121.7195,
    23: -121.9580,
    24: -122.3321, 
    25: -93.258133,
    26: -77.0369
    
}

export default function PredictionPage(){
    const [city,setCity] = useState(0)
    const [room,setRoom] = useState(0)
    const [min_night,setMin_night] = useState(0)
    const [nor,setNor] = useState(0)
    const [revpm,setRevpm] = useState(0)
    const [availability,setAvailability] = useState(0)
    const [norltm,setNorltm] = useState(0)
    const [price,setPrice] = useState(0)
    const [calculate,setCalculate] = useState(false)

    async function makePrrediction(ev){
        ev.preventDefault()
        setCalculate(true)
        try{
            const lat = latitude[city]
            const long = longitude[city]
            const {data} = await axios.post('/predict',{lat,long,room,min_night,nor,revpm,availability,norltm,city})
            setPrice(data)
        } catch(e){
            alert(e)
        }
        setCalculate(false)
    }

    return(
        
            <div className="mt-4 flex justify-around">
            <div className="mt-8">
                <div className="text-4xl text-center text-primary px-4 my-16 border border-gray-500 rounded-full"> Predicted Price </div>
                {calculate ? (
                    <div className="mt-10 ml-10 text-6xl"> Predicting.... </div>
                ) : (
                    <div className="mt-10 ml-10 text-9xl"> ${price} </div>
                )

                }
                
                
            </div>
            
            <div>
                <form className="flex flex-col " onSubmit={makePrrediction}>
                    <div className="flex flex-col gap-2">
                    <label className="text-2xl text-primary">City</label>
                    <select value = {city} onChange={e=> setCity(e.target.value)}>
                        <option value="0">Asheville</option>
                        <option value="1">Austin</option>
                        <option value="2">Boston</option>
                        <option value="3">Broward County</option>
                        <option value="4">Cambridge</option>
                        <option value="5">Chicago</option>
                        <option value="6">Clark County</option>
                        <option value="7">Columbus</option>
                        <option value="8">Denver</option>
                        <option value="9">Jersey City</option>
                        <option value="10">Los Angeles</option>
                        <option value="11">Nashville</option>
                        <option value="12">New Orleans</option>
                        <option value="13">New York City</option>
                        <option value="14">Oakland</option>
                        <option value="15">Pacific Grove</option>
                        <option value="16">Portland</option>
                        <option value="17">Rhode Island</option>
                        <option value="18">Salem</option>
                        <option value="19">San Diego</option>
                        <option value="20">San Francisco</option>
                        <option value="21">San Mateo County</option>
                        <option value="22">Santa Clara County</option>
                        <option value="23">Santa Cruz County</option>
                        <option value="24">Seattle</option>
                        <option value="25">Twin Cities MSA</option>
                        <option value="26">Washington DC</option>
                        
                    
                    </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Room-Type</label>
                        <select value = {room} onChange={e=> setRoom(e.target.value)}>
                            <option value="0">Entire Home</option>
                            <option value="1">Hotel Room</option>
                            <option value="2">Private Room</option>
                            <option value="3">Shared Room</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Minimum Nights</label>
                        <input type="number" min={0} max = {50} 
                                value = {min_night}
                                onChange = {ev => setMin_night(ev.target.value)}/> 
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Number of Reviews</label>
                        <input type="number" min={0} 
                            value = {nor}
                            onChange = {ev => setNor(ev.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Reviews per Month</label>
                        <input type="number" placeholder="password" min={0}
                            value = {revpm}
                            onChange = {ev => setRevpm(ev.target.value)}/>

                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Number of Reviews in Last Month</label>
                        <input type="number" min={0} 
                            value = {norltm}
                            onChange = {ev => setNorltm(ev.target.value)}/> 
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-2xl text-primary">Availabity</label>
                        <input type="number" min={0} max = {365}
                            value = {availability}
                            onChange = {ev => setAvailability(ev.target.value)}/>
                    </div>
                    <button className="bg-primary text-white border border-black-300 text-3xl mt-2 p-1 rounded-full"> Predict </button>
                </form>
            </div>
            
        </div>
          
        
    )
}
