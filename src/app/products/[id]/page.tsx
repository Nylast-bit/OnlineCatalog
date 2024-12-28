"use client"; // Indica que este componente es del lado del cliente

import { useEffect, useState } from "react";
import { getDeviceById } from "@/server/queries/device.queries";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [device, setDevice] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const whatsappNumber = "8299677562"; // Reemplaza con tu número de WhatsApp

  // Cargar datos del dispositivo
  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const deviceId = parseInt(params.id);
        if (isNaN(deviceId)) {
          setError("ID inválido. No se pudo encontrar el dispositivo.");
          return;
        }

        const response = await getDeviceById(deviceId);
        if (!response.success) {
          setError("Dispositivo no encontrado");
          return;
        }

        setDevice(response.response);
      } catch (err) {
        console.error("Error al obtener el dispositivo:", err);
        setError("Error al cargar los detalles del dispositivo.");
      }
    };

    fetchDevice();
  }, [params.id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!device) {
    return <div>Cargando...</div>; // Mensaje de carga mientras se obtienen los datos
  }

  // Verifica si la imagen es válida, si no, usa una imagen predeterminada
  const deviceImage = device.deviceImage || "https://via.placeholder.com/300";
  const whatsappMessage = `Hola, estoy interesado en el producto: ${device.deviceName}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Columna izquierda - Imagen y descripción */}
      <div
        style={{
          marginTop: "150px",
          marginRight: "100px",
          flex: "1",
          maxWidth: "50%",
          display: "flex",
          gap: "20px",
        }}
      >
        {/* Imagen */}
        <img
          src={deviceImage}
          alt={device.deviceName}
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />

        {/* Texto al lado de la imagen */}
        <div
          style={{
            marginBottom: "270px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px 0",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {device.deviceName}
          </h1>

          <p style={{ margin: "0" }}>
            <b>Características:</b> {device.deviceFeatures}
          </p>
        </div>
      </div>

      {/* Columna derecha - Precio y botones */}
      <div
        style={{
          marginTop: "150px",
          flex: "1",
          maxWidth: "30%",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Precio: RD$ {parseFloat(device.devicePrice).toFixed(2)}
        </p>
        <br></br>
        <button
          style={{
            display: "flex",
            justifyContent: "center",  
            width: "100%",
            backgroundColor: "#25D366",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
            fontSize: "16px",
          }}
          onClick={() => {
            window.open(
              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank"
            );
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt="WhatsApp Logo"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px",
            }}
          />
          Agendar cita por WhatsApp
        </button>
        <button
          style={{
            display: "block",
            width: "100%",
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
