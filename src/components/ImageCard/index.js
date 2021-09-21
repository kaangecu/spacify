import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import errorImage from "../../assets/errorPlaceholder.png";

export default function ImageCard({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  const header = (
    <img
      alt="Card"
      src={data?.url}
      onError={(e) => (e.target.src = errorImage)}
    />
  );
  const footer = (
    <span>
      {isLiked ? (
        <Button
          label="Dislike"
          icon="pi pi-thumbs-down"
          onClick={() => setIsLiked(false)}
          className="card-button-red"
        />
      ) : (
        <Button
          label="Like"
          icon="pi pi-heart"
          onClick={() => setIsLiked(true)}
        />
      )}
    </span>
  );

  return (
    <div className="card">
      <Card
        title={data?.title}
        subTitle={data?.date}
        className="card-title"
        footer={footer}
        header={header}
      >
        <p className="p-m-0" className="card-p">
          {data?.explanation}
        </p>
      </Card>
    </div>
  );
}
