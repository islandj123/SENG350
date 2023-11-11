public class Appointment
{
    public required int AppointmentId { get; set; }
    public required int EDId { get; set; }
    public required int UserId { get; set; }
    public required string Time { get; set; }

    public Appointment(int appointmentId, int edId, int userId, string time)
    {
        AppointmentId = appointmentId;
        EDId = edId;
        UserId = userId;
        Time = time;
    }

}