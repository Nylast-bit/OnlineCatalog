import React from "react";
import Card from "antd/lib/card";
import CustomButton from "./CustomButton";
import "./styles.css";
import { CustomTileProps } from "../types";
import Link from "next/link";

const Tile = ({ id, Name, Features, Price, Image }: CustomTileProps) => {
  const handleClick = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <Link href={`/products/${id}`}>
      <Card
        title={Name}
        className="m-5"
        style={{ width: 300 }}
        hoverable={true}
        cover={
          <img
      alt="image"
      src={Image ? Image : "/default-image.jpg"}  // Imagen de respaldo si 'Image' está vacío
      className="p-3 w-full h-[300px] object-cover"
    />
        }
      >
        <p>
          <b>Nombre: </b> {Name}
        </p>
        <p>
          <b>Características: </b>
          {Features}
        </p>
        <p>
          <b>Precio: </b>RD$ {parseFloat(Price.toString()).toFixed(2)}<br>
          </br>
        </p>
          
  <CustomButton
    title="Comprar"
    handleClick={() => {}}
    containerStyles="bg-primary-500 text-white w-full rounded-lg h-15 mt-4"
  />

      </Card>
</Link>
    </div>
  );
};

export default Tile;
