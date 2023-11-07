public class ED
{
    public required int Id { get; set; }
    public required string Address { get; set; }
    public required double Latitude { get; set; }
    public required double Longitude { get; set; }
    public required int Capacity { get; set; }
    public required string Wait { get; set; }

    public ED(int id, string address, double latitude, double longitude, int capacity, string wait)
    {
        Id = id;
        Address = address;
        Latitude = latitude;
        Longitude = longitude;
        Capacity = capacity;
        Wait = wait;
    }

}