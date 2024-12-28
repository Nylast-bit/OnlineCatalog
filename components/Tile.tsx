import React from "react";
import { Card } from "antd";
import CustomButton from "./CustomButton";
import "./styles.css";
import { CustomTileProps } from "../types";
import Link from "next/link";

const Tile = ({ id, Name, Features, Price, Image }: CustomTileProps) => {
  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("Tile clicked");
  };

  return (
    <div className="flex justify-center">
      <Card
        title={Name}
        className="m-5"
        style={{ width: 300 }}
        hoverable={true}
        cover={
          <img
            alt="image"
            src={Image}
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
          <Link href={`/products/${id}`}>
  <CustomButton
    title="Guardar"
    handleClick={() => {}}
    containerStyles="bg-primary-500 text-white w-full rounded-lg h-15 mt-4"
  />
</Link>

      </Card>
    </div>
  );
};

export default Tile;
