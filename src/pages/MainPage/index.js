import React,{useState, useEffect} from 'react'
import {getApodBetweenDates} from '../../api/apod/index'
import ImageCard from '../../components/ImageCard/index'

import '../../styles/style.scss'

export default function MainPage() {
    
    const [data, setData] = useState()

    useEffect(()=>{
        getApodBetweenDates("2021-09-18","2021-09-20").then(res=>setData(res))
    },[])

    console.log(data)
    
    return (
        <div className="main-page">
            {data?.map(el=><ImageCard data={el}/>)}
        </div>
    )
}
