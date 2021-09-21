import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import errorImage from '../../assets/errorPlaceholder.png'

export default function ImageCard({data}) {

    const header = (
        <img alt="Card" src={data?.url} onError={(e) => e.target.src=errorImage} />
    );
    const footer = (
        <span>
            <Button label="Like" icon="pi pi-heart" />
        </span>
    );

    return (
        <div>   
            <Card title={data?.title} subTitle={data?.date} style={{ width: '35em' }} footer={footer} header={header}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{data?.explanation}</p>
            </Card>
        </div>
    )
}
