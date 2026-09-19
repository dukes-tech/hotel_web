import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from './firebase';


import hotelData from '../../data/hotel.json';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

    async obtenerHotel() {

        const referencia = doc(db, 'hotel', '101');
        const resultado = await getDoc(referencia);

        if (resultado.exists()) {
            return {
            id: resultado.id,
            ...resultado.data()
            };
        }

        return null;
    }

    async obtenerHabitaciones() {

        const referencia = collection(db, 'habitaciones');
        const resultado = await getDocs(referencia);

        return resultado.docs.map(documento => ({
            id: documento.id,
            ...documento.data()
        }));

    }

    async obtenerHabitacion(id: string) {

        const referencia = doc(db, 'habitaciones', id);
        const resultado = await getDoc(referencia);

        if (resultado.exists()) {
            return {
            id: resultado.id,
            ...resultado.data()
            };
        }

        return null;
    }

    async obtenerServicios() {

      const referencia = collection(db, 'servicios');
      const resultado = await getDocs(referencia);

      return resultado.docs.map(documento => ({
        id: documento.id,
        ...documento.data()
      }));

    }

  async cargarDatosIniciales() {

    try {

      // HOTEL
      await setDoc(doc(db, 'hotel', String(hotelData.hotel_id)), {
        nombre: hotelData.nombre,
        nombre_comercial: hotelData.nombre_comercial,
        descripcion_corta: hotelData.descripcion_corta,
        descripcion: hotelData.descripcion,
        categoria: hotelData.categoria,
        historia: hotelData.historia,
        mision: hotelData.mision,
        vision: hotelData.vision,
        ubicacion: hotelData.ubicacion,
        contacto: hotelData.contacto,
        horarios: hotelData.horarios
      });

      // HABITACIONES
      for (const habitacion of hotelData.habitaciones) {

        await setDoc(
          doc(db, 'habitaciones', habitacion.id),
          habitacion
        );

      }

      // SERVICIOS
      for (const servicio of hotelData.servicios) {

        await setDoc(
          doc(db, 'servicios', String(servicio.id)),
          servicio
        );

      }

      console.log('Datos cargados correctamente');

    } catch (error) {

      console.error('Error cargando datos:', error);

    }

  }
  async actualizarInformacionHotel() {

  await setDoc(
    doc(db, 'hotel', '101'),
    {
      historia: hotelData.historia,
      mision: hotelData.mision,
      vision: hotelData.vision
    },
    { merge: true }
  );

  console.log('Información del hotel actualizada');
}
async actualizarValoraciones() {

  await setDoc(
    doc(db, 'hotel', '101'),
    {
      valoraciones: hotelData.valoraciones
    },
    { merge: true }
  );

  console.log('Valoraciones cargadas correctamente');
}
async crearMensaje(mensaje: any) {

  const referencia = collection(db, 'mensajes');

  const documento = await addDoc(referencia, {
    ...mensaje,
    fecha: new Date()
  });

  return documento.id;
}
async actualizarHabitacion(id: string, datos: any) {

  await setDoc(
    doc(db, 'habitaciones', id),
    datos,
    { merge: true }
  );

}
async eliminarHabitacion(id: string) {
  await deleteDoc(
    doc(db, 'habitaciones', id)
  );
}

async actualizarImagenesHabitaciones() {

  for (const habitacion of hotelData.habitaciones) {

    await setDoc(
      doc(db, 'habitaciones', habitacion.id),
      {
        imagen: habitacion.imagen
      },
      { merge: true }
    );

  }

  console.log('Imágenes actualizadas correctamente');
}
async actualizarImagenesHotel() {

  await setDoc(
    doc(db, 'hotel', '101'),
    {
      imagenes: {
        portada: hotelData.imagenes.portada,
        nosotros: hotelData.imagenes.nosotros
      }
    },
    { merge: true }
  );

}
async actualizarImagenesServicios() {

  for (const servicio of hotelData.servicios) {

    await setDoc(
      doc(db, 'servicios', String(servicio.id)),
      {
        imagen: servicio.imagen
      },
      { merge: true }
    );

  }

  console.log('Imágenes de servicios actualizadas');
}
async actualizarImagenesResenas() {

  await setDoc(
    doc(db, 'hotel', '101'),
    {
      valoraciones: hotelData.valoraciones
    },
    { merge: true }
  );

  console.log('Imágenes de reseñas actualizadas');
}
}