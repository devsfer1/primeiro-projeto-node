import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// DTO - Data Transfer Object
interface createAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = []
  }

  // Listar todos agendamentos (Método Get)
  public all(): Appointment[] {
    return this.appointments;
  }

  // Encontrar agendamento na data especifica para fazer a validação
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  // Criar nova agendamento
  public create({ provider, date }: createAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;