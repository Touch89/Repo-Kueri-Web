export type MetodoPago = 'tarjeta';

export type CheckoutItem = {
  productId: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export type CheckoutPayload = {
  nombre: string;
  email: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  metodoPago: MetodoPago;
  items: CheckoutItem[];
  total: number;
};

export type CheckoutResponse = {
  id: number;
  fecha: string;
  estado: string;
};

let nextOrderId = 2000;

export async function crearPedido(_payload: CheckoutPayload): Promise<CheckoutResponse> {
  // Simulación de red – reemplazar con llamada real cuando el backend esté listo
  await new Promise((resolve) => setTimeout(resolve, 600));
  return {
    id: ++nextOrderId,
    fecha: new Date().toISOString(),
    estado: 'pendiente',
  };
}
