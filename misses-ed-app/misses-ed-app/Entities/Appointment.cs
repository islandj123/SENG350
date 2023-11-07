public class User
{
    public required int AppointmentId { get; set; }
    public required int EDId { get; set; }
    public required int UserId { get; set; }
    public required string Wait { get; set; }

    public Appointment(int appointmentId, int edId, int userID, string wait)
    {
        AppointmentId = appointmentId;
        EDId = edId;
        UserId = userId;
        Wait = wait;
    }

}