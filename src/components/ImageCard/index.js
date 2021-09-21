import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {getApod} from '../../api/apod/index'

export default function ImageCard() {
    
    const data = getApod("2021-09-18","2021-09-20")

    console.log(data)
    const header = (
        <img alt="Card" src={data?.then(res=>res.url)} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
    );

    return (
        <div>   
            <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )
}
